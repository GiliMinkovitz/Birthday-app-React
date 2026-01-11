import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function GreetingCard({ name, message }) {
  const { language } = useContext(LanguageContext);

  console.log(language);

  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "4px" }}>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
