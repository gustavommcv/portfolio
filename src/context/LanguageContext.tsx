
import { createContext } from "solid-js";
import Language from "./LanguageType";

const LanguageContext = createContext<{
  language: () => Language;
  toggleLanguage: () => void
}>();

export default LanguageContext;
