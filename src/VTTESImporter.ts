import { handlerenderActorSheet5e } from "./module/actor/fileImport";
import { VTTES } from "./module/config";
import { log, logError } from "./module/helpers";

window.addEventListener("unhandledrejection", function (event) {
  logError(
    "Unhandled rejection (promise: ",
    event.promise,
    ", reason: ",
    event.reason,
    ")."
  );
});

CONFIG.debug.hooks = false;

/* ------------------------------------ */
/* Initialize module                    */
/* ------------------------------------ */
Hooks.once("init", async function () {
  log(`Initializing VTTEs Importer ${VTTES.ASCII}`);
});

/**
 * Override model to have our derived trackable values, without putting them in template.json and thus compromising
 * our data model with derived junk
 */
Hooks.once("setup", function () {
  log(`Foundry setup`);
});

/* ------------------------------------ */
/* When ready                           */
/* ------------------------------------ */
// Make an awaitable for when this shit is done
export const system_ready: Promise<void> = new Promise((success) => {
  Hooks.once("ready", async function () {
    log(`Foundry ready, doing final checks.`);
    // console.log((game as Game).));
    success();
  });
});

Hooks.on("renderActorSheet5e", handlerenderActorSheet5e);
