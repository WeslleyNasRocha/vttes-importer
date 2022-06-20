import { VTTES } from "./config";

export const showNotification = (
  message: string,
  level: "error" | "warning" | "info"
) => {
  switch (level) {
    case "info":
      ui.notifications?.info(message);
      break;
    case "warning":
      ui.notifications?.warn(message);
      break;
    case "error":
      ui.notifications?.error(message);
      break;

    default:
      break;
  }
};

export const log = (...args: Array<any>) => {
  console.log(`${VTTES.log_prefix}`, ...args);
};

export const logError = (...args: Array<any>) => {
  console.error(`${VTTES.log_prefix}`, ...args);
};

export const logWarn = (...args: Array<any>) => {
  console.warn(`${VTTES.log_prefix}`, ...args);
};


export const VTTES_TO_FOUNDRY_SIZES = {
  tiny: "tiny",
  small: "sm",
  medium: "med",
  large: "lg",
  huge: "huge",
  gargantuan: "grg",
};