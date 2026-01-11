import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function ChooseLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <label>
      Choose language:
      <select value={language} onChange={handleChange}>
        <option value="he">עברית</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
}
