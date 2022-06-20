export interface ActorSheetUpdateData {
  abilities: Abilities;
  attributes: Attributes;
  details: Details;
  traits: Traits;
  currency: Currency;
  skills: Skills;
  spells: Spells;
  bonuses: Bonuses3;
  resources: Resources;
  prof: CheckProf;
  classes: Classes;
  mod: number;
}

export interface Classes {}

export interface Resources {
  primary: Primary;
  secondary: Primary;
  tertiary: Primary;
  legact: Legact;
  legres: Legact;
  lair: Lair;
}

export interface Lair {
  value: boolean;
  initiative: number;
}

export interface Legact {
  value: number;
  max: number;
}

export interface Primary {
  value: number;
  max: number;
  sr: number;
  lr: number;
}

export interface Bonuses3 {
  mwak: Mwak;
  rwak: Mwak;
  msak: Mwak;
  rsak: Mwak;
  abilities: Abilities2;
  spell: Spell;
}

export interface Spell {
  dc: string;
}

export interface Abilities2 {
  check: string;
  save: string;
  skill: string;
}

export interface Mwak {
  attack: string;
  damage: string;
}

export interface Spells {
  spell1: Spell1;
  spell2: Spell1;
  spell3: Spell1;
  spell4: Spell1;
  spell5: Spell1;
  spell6: Spell1;
  spell7: Spell1;
  spell8: Spell1;
  spell9: Spell1;
  pact: Pact;
}

export interface Pact {
  value: number;
  override?: any;
  max: number;
  level: number;
}

export interface Spell1 {
  value: number;
  override?: any;
  max: number;
}

export interface Skills {
  acr: Skill;
  ani: Skill;
  arc: Skill;
  ath: Skill;
  dec: Skill;
  his: Skill;
  ins: Skill;
  itm: Skill;
  inv: Skill;
  med: Skill;
  nat: Skill;
  prc: Skill;
  prf: Skill;
  per: Skill;
  rel: Skill;
  slt: Skill;
  ste: Skill;
  sur: Skill;
}

export interface Skill {
  value: number;
  ability: string;
  bonuses: SkillBonuses;
  bonus: number;
  mod: number;
  passive: number;
  prof: CheckProf;
  total: number;
  proficient: number;
}

export interface SkillBonuses {
  check: string;
  passive: string;
}

export interface Currency {
  pp: number;
  gp: number;
  ep: number;
  sp: number;
  cp: number;
}

export interface Traits {
  size: string;
  di: Trait;
  dr: Trait;
  dv: Trait;
  ci: Trait;
  languages: Trait;
  weaponProf: Trait;
  armorProf: Trait;
  toolProf: Trait;
}

export interface Trait {
  value: any[];
  custom: string;
}

export interface Details {
  biography: Biography;
  alignment: string;
  race: string;
  background: string;
  originalClass: string;
  xp: Xp;
  appearance: string;
  trait: string;
  ideal: string;
  bond: string;
  flaw: string;
  type: Type;
  environment: string;
  cr: number;
  spellLevel: number;
  source: string;
  age: string;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  level: number;
}

export interface Type {
  value: string;
  subtype: string;
  swarm: string;
  custom: string;
}

export interface Xp {
  value: number;
  min: number;
  max: number;
  pct?: any;
}

export interface Biography {
  value: string;
  public: string;
}

export interface Attributes {
  ac: Ac;
  hp: Hp;
  init: Init;
  movement: Movement;
  senses: Senses;
  spellcasting: string;
  death: Death;
  exhaustion?: any;
  inspiration: boolean;
  hd: number;
  prof: number;
  encumbrance: Encumbrance;
  spelldc: number;
}

export interface Encumbrance {
  value: number;
  max: number;
  pct: number;
  encumbered: boolean;
}

export interface Death {
  success?: any;
  failure?: any;
}

export interface Senses {
  darkvision: number;
  blindsight: number;
  tremorsense: number;
  truesight: number;
  units: string;
  special: string;
}

export interface Movement {
  burrow: number;
  climb: number;
  fly: number;
  swim: number;
  walk: number;
  units: string;
  hover: boolean;
}

export interface Init {
  value: number;
  bonus: number;
  mod: number;
  prof: CheckProf;
  total: number;
}

export interface Hp {
  value: number;
  min: number;
  max: number;
  temp: number;
  tempmax: number;
  formula: string;
}

export interface Ac {
  flat?: any;
  calc: string;
  formula: string;
  base: number;
  cover: number;
  bonus: number;
  shield: number;
  warnings: any[];
  dex: number;
  value: number;
}

export interface Abilities {
  str: Str;
  dex: Str;
  con: Str;
  int: Int;
  wis: Int;
  cha: Str;
}

export interface Int {
  value: number;
  proficient: number;
  bonuses: Bonuses;
  mod: number;
  prof?: any;
  saveBonus: number;
  checkBonus: number;
  checkProf: CheckProf;
  saveProf: CheckProf;
  save: number;
  dc: number;
}

export interface Str {
  value: number;
  proficient: number;
  bonuses: Bonuses;
  mod: number;
  prof: number;
  saveBonus: number;
  checkBonus: number;
  checkProf: CheckProf;
  saveProf: CheckProf;
  save: number;
  dc: number;
}

export interface CheckProf {
  _baseProficiency: number;
  multiplier: number;
  rounding: string;
}

export interface Bonuses {
  check: string;
  save: string;
}
