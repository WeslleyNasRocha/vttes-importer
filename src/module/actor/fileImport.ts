import { log, logError } from "../helpers";
import { RenderActorSheet5eData } from "./actorSheet.types";
import { PCImporter } from "./PCActorSheet";

export const handlerenderActorSheet5e = async (
  app: any,
  html: any,
  data: RenderActorSheet5eData
) => {
  const actionsTabButton = $(
    '<a class="file-picker" data-tab="vttestofoundry-actor" data-actorid="' +
      data.actor._id +
      '"><i class="fas fa-file-import"></i> VTTES Importer </a>'
  );
  const closeButton = html.find(".close");
  actionsTabButton.insertBefore(closeButton);

  actionsTabButton.on("click", actorShowFilePicker);
};

async function actorShowFilePicker(event: any) {
  var dialogContent = await renderTemplate(
    "modules/vttes-importer/templates/file-picker.hbs",
    {
      actorId: event.currentTarget.dataset.actorid,
    }
  );

  var dialog = new Dialog({
    title: "Import VTTES File",
    content: dialogContent,
    buttons: {
      one: {
        icon: '<i class="fas fa-file-import"></i>',
        label: "Import file",
        callback: actorReadFile,
      },
      two: {
        icon: '<i class="fas fa-times"></i>',
        // label: game.i18n.localize("QACT.Cancel"),
        label: "Cancel",
        callback: () => log("Chose Cancel"),
      },
    },
    default: "two",
    render: (html) => log("Register interactivity in the rendered dialog"),
    close: (html) => log("Cancel"),
  });
  dialog.render(true);
}

function actorReadFile(control: JQuery<HTMLElement> | HTMLElement) {
  log("Importing ...");

  const importer = (control as JQuery<HTMLInputElement>).find(
    ".json-import"
  )[0] as HTMLInputElement;
  if (importer.dataset.actorid) {
    const actor = (game as Game).actors?.get(importer.dataset.actorid);
    const f = importer.files?.length ? importer.files[0] : null;
    // Read the file and parse as json
    if (f) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const json = JSON.parse(e?.target?.result as string);
        if (schemaIsValid(json) && actor) {
          importToActor(json, actor);
        } else {
          logError(`Invalid schema for ${f.name}`);
        }
      };
      reader.onerror = (e) => {
        logError(e);
      };
      reader.readAsText(f);
    }
  }
}

const checkCompendiums = async () => {
  let hasCompendium = false;
  for (const pack of (game as Game).packs.entries()) {
    if (pack[0] === "world.vttes-items") {
      hasCompendium = true;
    }
  }
  if (!hasCompendium) {
    await CompendiumCollection.createCompendium({
      name: "vttes-items",
      label: "vttes-items",
      path: "packs/from-vttes.db",
      private: false,
      type: "Item",
      system: "dnd5e",
      package: "world",
    });
  }
};

const importToActor = async (
  content: any,
  actor: StoredDocument<Actor>,
  compendiums = []
) => {
  checkCompendiums();
  ui?.notifications?.info(`Starting import of ${content.character.name}`);

  const imp = new PCImporter(actor);
  await imp.import(content);
};

function schemaIsValid(content: any) {
  if (!content.schema_version || parseInt(content.schema_version) < 3) {
    logError(
      `The given document is not on a supported schema. Expected : 3 or superior, actual : ${
        content.schema_version ?? "not set"
      }`,
      true
    );
    return false;
  }
  return true;
}
