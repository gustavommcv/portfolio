import { createContext } from "solid-js";
import Theme from "./ThemeType";

const ThemeContext = createContext<{
  theme: () => Theme;
  toggleTheme: () => void;
}>();

export default ThemeContext;
