import React from "react";

const Render = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, index) => (
          <div key={index}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Render;
