/* eslint-disable react-refresh/only-export-components */

import React, { useState, createContext } from "react";

export const LanguageContext = createContext({
  language: "he",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const LANGUAGES = ["he", "en", "fr"];

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("he");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const currentIndex = LANGUAGES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      return LANGUAGES[nextIndex];
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
