import { useContext } from "react";
import { ThemeContext } from "../ThemeContextProvider";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw "No ThemeContextProvider provided";

  return context;
}
