import React from "react";

export default function GreetingsList({ greetingsList }) {
  return (
    <>
      <div>
        {greetingsList.map((greet, index) => (
          <GreetingCard key={index} {...greet} />
        ))}
      </div>
    </>
  );
}
