import { THEMES } from "../const";
import { Theme } from "../types";

export function assertIsTheme(value: string): asserts value is Theme {
  if (!THEMES.includes(value as Theme))
    throw `This theme '${value}' is not supported, supported ones are ${THEMES}`;
}
