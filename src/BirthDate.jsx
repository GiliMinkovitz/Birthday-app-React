import React from "react";

export default function BirthDate({ date }) {
  const year = date.getFullYear();
  const age = new Date().getFullYear() - year;
  return <div>Congratulations! you are {age} years old</div>;
}
