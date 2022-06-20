import { evaluate } from "mathjs";
import {
  log,
  logError,
  logWarn,
  showNotification,
  VTTES_TO_FOUNDRY_SIZES,
} from "../helpers";
import { ActorSheetUpdateData, Skill, Skills } from "./actorData.type";

//#region Types
type Content = {
  schema_version: string;
  type: string;
  character: Character;
};

type Character = {
  oldId: string;
  name: string;
  avatar: string;
  bio: string;
  gmnotes: string;
  defaulttoken: string;
  tags: string;
  controlledby: string;
  inplayerjournals: string;
  attribs: Attrib[];
  abilities: any[];
};

type Attrib = {
  name: string;
  current: number | string;
  max: number | string;
  id: string;
};

type ActorAbilities = {
  str: AbilityData;
  dex: AbilityData;
  con: AbilityData;
  int: AbilityData;
  wis: AbilityData;
  cha: AbilityData;
};
type AbilityData = {
  value: number;
  proficient: number;
  mod: number;
  prof: number;
  saveBonus: number;
  checkBonus: number;
};

type ProficiencyData = {
  [key: string]: Array<string>;
};

//#endregion

// import fs from "fs";
// import path from "path";
// import {evaluate} from "mathjs";

function noop(...args: any): any | Promise<any> {}

class ActorImporter {
  numberRegex = /\d+/g;
  content?: Content;
  actor: Actor;
  repeatingFeatures: {};
  repeatingFeaturesIds: {};
  usedAttacks: never[];

  constructor(actor: Actor) {
    this.actor = actor;
    this.repeatingFeatures = {};
    this.repeatingFeaturesIds = {};
    this.usedAttacks = [];
  }

  async import(content: Content) {
    this.content = content;
    this.extractRepeatings();
  }

  extractRepeatings() {
    const input = "repeating";

    const traits = this.getAttribsStartsWith(input);
    const arr: Record<string, any> = {};
    const ids: Record<string, any> = {};

    traits?.forEach((t) => {
      const regex = new RegExp(
        /repeating_([a-zA-Z-0-1]+)_(-[a-zA-z]-[a-zA-Z0-9-]+)_([\w-_]+)/g
      );
      const match = regex.exec(t.name);
      if (match) {
        const [, type, id, name] = match;
        if (!arr[type]) {
          arr[type] = {};
          ids[type] = [];
        }
        if (!arr[type][id]) {
          arr[type][id] = {};
          ids[type].push(id);
        }
        arr[type][id][name] = {
          current: t.current,
          max: t.max,
        };
      }
    });

    this.repeatingFeatures = arr;
    this.repeatingFeaturesIds = ids;

    return {
      repeatingFeatures: arr,
      repeatingFeaturesIds: ids,
    };
  }

  getAttribsStartsWith(key: string) {
    return this.content?.character.attribs.filter((att) =>
      att.name.startsWith(key)
    );
  }

  getAbilities(): ActorAbilities {
    return {
      str: this.getAbility("strength"),
      dex: this.getAbility("dexterity"),
      con: this.getAbility("constitution"),
      int: this.getAbility("intelligence"),
      wis: this.getAbility("wisdom"),
      cha: this.getAbility("charisma"),
    };
  }

  getAbility(ability: string): AbilityData {
    return {
      value: this.getAttribCurrentInt(ability),
      proficient: this.getAttribCurrent(ability + "_save_prof") == 0 ? 0 : 1,
      mod: this.getAttribCurrentInt(ability + "_mod"),
      prof: this.getAttribCurrentInt(ability + "_save_prof"),
      saveBonus: this.getAttribCurrentInt(ability + "_save_bonus"),
      checkBonus: this.getAttribCurrentInt(ability + "_bonus"),
    };
  }

  getCalculatedProficiency(level: number) {
    return Math.floor((level + 7) / 4);
  }

  getSkills(abilities: ActorAbilities): DeepPartial<Skills> {
    const level = this.getAttribCurrentInt("level") as number;
    const proficiencyModifier = this.getCalculatedProficiency(level);

    return {
      acr: this.getSkill(abilities, "acrobatics", "dex", proficiencyModifier),
      ani: this.getSkill(
        abilities,
        "animal_handling",
        "wis",
        proficiencyModifier
      ),
      arc: this.getSkill(abilities, "arcana", "int", proficiencyModifier),
      ath: this.getSkill(abilities, "athletics", "str", proficiencyModifier),
      dec: this.getSkill(abilities, "deception", "cha", proficiencyModifier),
      his: this.getSkill(abilities, "history", "int", proficiencyModifier),
      ins: this.getSkill(abilities, "insight", "wis", proficiencyModifier),
      itm: this.getSkill(abilities, "intimidation", "cha", proficiencyModifier),
      inv: this.getSkill(
        abilities,
        "investigation",
        "int",
        proficiencyModifier
      ),
      med: this.getSkill(abilities, "medicine", "wis", proficiencyModifier),
      nat: this.getSkill(abilities, "nature", "int", proficiencyModifier),
      prc: this.getSkill(abilities, "perception", "wis", proficiencyModifier),
      prf: this.getSkill(abilities, "performance", "cha", proficiencyModifier),
      per: this.getSkill(abilities, "persuasion", "cha", proficiencyModifier),
      rel: this.getSkill(abilities, "religion", "int", proficiencyModifier),
      slt: this.getSkill(
        abilities,
        "sleight_of_hand",
        "dex",
        proficiencyModifier
      ),
      ste: this.getSkill(abilities, "stealth", "dex", proficiencyModifier),
      sur: this.getSkill(abilities, "survival", "wis", proficiencyModifier),
    };
  }

  getSkill(
    abilities: ActorAbilities,
    skillName: string,
    abilityShort: keyof ActorAbilities,
    proficiency: number
  ): Partial<Skill> {
    const isProficent =
      (this.getAttribCurrent(skillName + "_prof") as string).length > 0;
    const skillMod = this.getAttribCurrentInt(skillName + "_bonus");
    let proficiencyType = 0;
    const abilityMod = abilities[abilityShort].mod;

    if (isProficent) {
      proficiencyType = (skillMod - abilityMod) / proficiency;
    }

    const profValue = (isProficent ? proficiency : 0) * proficiencyType;
    const passive = 10 + skillMod;

    return {
      ability: abilityShort,
      bonus: 0,
      mod: abilityMod,
      passive: passive,
      prof: {
        _baseProficiency: profValue,
        multiplier: 2,
        rounding: "floor",
      },
      proficient: isProficent ? 1 : 0,
      value: proficiencyType,
      total: skillMod,
    };
  }

  getAttribCurrentInt(key: string, defaultValue = 0) {
    const attrib = this.getAttribCurrent(key);
    if (attrib === "") {
      return defaultValue;
    }
    return typeof attrib === "string" ? parseInt(attrib) : attrib;
  }

  getAttribCurrent(key: string, defaultValue = "") {
    const property = this.getAttrib(key);

    if (!property) {
      return defaultValue;
    }

    return property.current;
  }

  getAttrib(
    key: string,
    options?: { throwIfNotFound?: boolean; warnIfNotFound?: boolean }
  ) {
    const attrib = this.content?.character.attribs.find(
      (att) => att.name === key
    );
    if (attrib) {
      if (typeof attrib.current === "string" && attrib.current.includes("@{")) {
        const formulaRegex = new RegExp(/@{(\w+)}/g);
        const match = attrib.current.match(formulaRegex);

        if (match) {
          const msg = `${key} has a formula: ${attrib.current}, you should probably look into it`;
          logWarn(msg);
          showNotification(msg, "warning");
          // match.forEach((m) => {
          //   const formula = m.replace("@{", "").replace("}", "");
          //   const value = this.getAttribCurrentInt(formula);
          //   attrib.current = attrib.current
          //     .toString()
          //     .replace(m, value.toString());
          // });
          // try {
          //   // console.log(attrib.current)
          //   if (attrib.current.endsWith("+")) {
          //     attrib.current = attrib.current.slice(0, -1);
          //   }
          //   attrib.current = evaluate(attrib.current);
          // } catch (err) {
          //   console.log(err);
          // }
        }
      }

      return attrib;
    }

    const errorMessage = `Attribute ${key} cannot be found inside the provided file. Make sure all attributes ('attribs') are set to lowercase`;
    if (options?.warnIfNotFound) {
      logWarn(errorMessage);
      showNotification(errorMessage, "warning");
      return null;
    }
    if (options?.throwIfNotFound) {
      console.error(errorMessage);
      logError(errorMessage);
      showNotification(errorMessage, "error");
      throw `Attribute not found ${key}`;
    }
  }
  getGlobalProficiencies() {
    return this.getOrderedAttributesBySuffix("_prof_type");
  }

  getOrderedAttributesBySuffix(suffix: string): ProficiencyData {
    return this.getAttributesBySuffix(suffix).reduce((acc: any, curr) => {
      const key = curr.current;
      const value = this.getAttributeKey(curr, suffix);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
      return acc;
    }, {});
  }
  getAttributesBySuffix(suffix: string) {
    return this.content!.character.attribs.filter((a) =>
      a.name.endsWith(suffix)
    );
  }
  getAttributeKey(entry: Attrib, suffix: string) {
    return entry.name.substring(0, entry.name.length - suffix.length);
  }

  getHp(): { value: number; max: number } {
    const hpAttrib = this.getAttrib("hp", { warnIfNotFound: true });

    if (!hpAttrib) {
      logWarn(
        `The attribute hp was not found. Make sure all attributes names (attribs) are set in lowercase`,
        true
      );
      throw "Attribute hp not found";
    }
    return {
      value: hpAttrib.current as number,
      max: hpAttrib.max as number,
    };
  }

  getSpellcastingAbility() {
    const key = "spellcasting_ability";

    const abilityName = this.getAttribCurrent(key) as string;
    if (abilityName.length <= 2) {
      return "";
    }

    return abilityName.substring(2, abilityName.length - 6).substring(0, 3);
  }

  getProficiencyAsCustom(
    proficiencies: ProficiencyData,
    profKey: keyof ProficiencyData
  ) {
    var keys = proficiencies[profKey];
    if (!keys) {
      return "none";
    }
    var values = keys.reduce((arr: string[], curr) => {
      const profName = (
        this.getAttribCurrent(curr + "_name") as string
      ).toLowerCase();
      arr.push(profName);
      return arr;
    }, []);

    if (values && values.length > 0) {
      return values.join(";");
    }
    return "none";
  }

  getToolProficiencies() {
    return this.getAttributesBySuffix("_toolname").reduce(
      (acc: string[], curr) => {
        acc.push(curr.current as string);
        return acc;
      },
      []
    );
  }
}

export class PCImporter extends ActorImporter {
  async import(content: Content) {
    await super.import(content);
    const abilities = this.getAbilities();

    const size = this.getAttribCurrent("size") as string;

    await this.updateActorSheet({
      abilities,
      size,
    });

    // const inventory = await this.embedFromCompendiums(
    //   "equipment",
    //   "inventory",
    //   {
    //     keyName: "itemname",
    //     createAction: this.createItem,
    //     features: this.repeatingFeatures,
    //   }
    // );
    // console.log(this.getAttrib("insight_prof"));
    // console.log(abilities);
  }

  getPCDetails() {
    return {
      biography: {
        value: unescape(this?.content?.character?.bio ?? ""),
        public: "",
      },
      alignment: this.getAttribCurrent("alignment") as string,
      race: this.getAttribCurrent("race_display") as string,
      background: this.getAttribCurrent("background") as string,
      xp: {
        value: this.getAttribCurrentInt("experience") as number,
      },
      appearance: "",
      trait: this.getAttribCurrent("personality_traits") as string,
      ideal: this.getAttribCurrent("ideals") as string,
      bond: this.getAttribCurrent("bonds") as string,
      flaw: this.getAttribCurrent("flaws") as string,
      age: this.getAttribCurrent("age") as string,
      height: this.getAttribCurrent("height") as string,
      weight: this.getAttribCurrent("weight") as string,
      eyes: this.getAttribCurrent("eyes") as string,
      skin: this.getAttribCurrent("skin") as string,
      hair: this.getAttribCurrent("hair") as string,
      level: this.getAttribCurrentInt("level") as number,
    };
  }

  async updateActorSheet(data: { abilities: ActorAbilities; size: string }) {
    const details = this.getPCDetails();
    const skills = this.getSkills(data.abilities);
    const proficiencies = this.getGlobalProficiencies();
    const tools = this.getToolProficiencies();
    console.log(proficiencies, tools);
    const actorData: DeepPartial<ActorSheetUpdateData> = {
      abilities: data.abilities,
      details: details,
      skills,
      attributes: {
        ac: {
          value: this.getAttribCurrentInt("ac"),
        },
        hp: this.getHp(),
        init: {
          mod: this.getAttribCurrentInt("initiative_bonus"),
        },
        movement: {
          burrow: 0,
          climb: 0,
          fly: 0,
          swim: 0,
          walk: this.getAttribCurrentInt("speed"),
          units: "m",
          hover: false,
        },
        spellcasting: this.getSpellcastingAbility(),
        exhaustion: 0,
        hd: 0,
        prof: 1,
        encumbrance: {
          value: 0,
          max: 120,
          pct: 0,
          encumbered: false,
        },
      },
      currency: {
        pp: this.getAttribCurrentInt("pp"),
        gp: this.getAttribCurrentInt("gp"),
        ep: this.getAttribCurrentInt("ep"),
        sp: this.getAttribCurrentInt("sp"),
        cp: this.getAttribCurrentInt("cp"),
      },
      traits: {
        // @ts-ignore
        size: VTTES_TO_FOUNDRY_SIZES[data.size],
        di: {
          value: [],
          custom: "",
        },
        dr: {
          value: [],
          custom: "",
        },
        dv: {
          value: [],
          custom: "",
        },
        ci: {
          value: [],
          custom: "",
        },
        languages: {
          value: [],
          custom: this.getProficiencyAsCustom(proficiencies, "IDIOMA"),
        },
        weaponProf: {
          value: [],
          custom: this.getProficiencyAsCustom(proficiencies, "ARMA"),
        },
        armorProf: {
          value: [],
          custom: this.getProficiencyAsCustom(proficiencies, "ARMADURA"),
        },
        toolProf: {
          value: [],
          custom: tools.join(";"),
        },
      },
    };
    console.log("before the update", this.actor);
    // await this.actor.update({
    //   name: this.content?.character.name,
    //   img: this.content?.character.avatar,
    //   type: "character",
    //   token: {
    //     name: this.content?.character.name,
    //     displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER,
    //     actorLink: true,
    //   },
    //   data: actorData,
    // });
    // console.log(this.actor.data);
    // console.log({ details, data, skills, proficiencies });
  }
}
