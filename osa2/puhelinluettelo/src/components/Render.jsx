import React from "react";
import personsService from "../services/persons"

const Render = ({ persons, filter, setPersons, setNotificationMessage }) => {
  const deleteName = (id, name) => {
    if (window.confirm(`Haluatko poistaa ${name} numeron?`)) {
      personsService.remove(id)
        .then((response) => {
          setNotificationMessage(`'${name}' Poistettu!`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          );
        })
        .catch((error) => {
          setNotificationMessage(`'${name}' on jo poistettu serveriltä!`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
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
              <button
                type="button"
                onClick={() => deleteName(person.id, person.name)}
              >
                Poista
              </button>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Render;
