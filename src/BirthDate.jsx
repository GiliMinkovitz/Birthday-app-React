import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export default function BirthDate({ date }) {
  const { language } = useContext(LanguageContext);
  const [translatedCongrats, setTranslatedCongrats] = useState("");
  const [translatedYearsOld, setTranslatedYearsOld] = useState("");
  const [translatedDateText, setTranslatedDateText] = useState("");

  const year = date.getFullYear();
  const age = new Date().getFullYear() - year;

  // פונקציה לקריאה ל-MyMemory API
  const translate = async (word, source = "he", target = "en") => {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      word
    )}&langpair=${source}|${target}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.responseData.translatedText;
    } catch (err) {
      console.error("Translation error:", err);
      return word;
    }
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      const tCongrats = await translate("מזל טוב!", "he", language);
      const tYearsOld = await translate("שנים", "he", language);
      const tDateText = await translate("התאריך הוא", "he", language);

      setTranslatedCongrats(tCongrats);
      setTranslatedYearsOld(tYearsOld);
      setTranslatedDateText(tDateText);
    };

    fetchTranslations();
  }, [language]);

  return (
    <>
      <div>
        {translatedCongrats} {age} {translatedYearsOld} (Language: {language})
      </div>
      <p>
        {translatedDateText}: {date.toLocaleDateString(language)}
      </p>
    </>
  );
}
