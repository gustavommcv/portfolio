import { ParentComponent, createSignal, onMount, useContext } from "solid-js";
import LanguageContext from "./LanguageContext";
import Language from "./LanguageType";

export const LanguageProvider: ParentComponent = (props) => {
  const [language, setLanguage] = createSignal<Language>("en");

  const toggleLanguage = () => {
    const newLanguage = language() === "en" ? "pt" : "en"; 
    setLanguage(newLanguage); 
    localStorage.setItem("language", newLanguage); 
  };

  onMount(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  });

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
