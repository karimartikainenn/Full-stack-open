import React, { useState, useEffect } from "react";
import axios from "axios";

const Render = ({ persons, filter, setPersons }) => {
  const deleteName = (id) => {
    if (window.confirm(`Haluatko poistaa id: ${id}`)) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then((response) => {
          console.log(id);
          console.log("Pyynnön onnistuminen:", response);
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          );
        })
        .catch((error) => {
          console.error("Virhe pyynnössä:", error);
        });
    }
  };

  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, index) => (
          <div key={index}>
            <p>
              {person.name} {person.number}{" "}
              <button type="button" onClick={() => deleteName(person.id)}>
                Poista
              </button>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Render;
