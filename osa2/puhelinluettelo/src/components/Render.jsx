import React from "react";
import personsService from "../services/persons";

const Render = ({ persons, filter, setPersons, setNotificationMessage }) => {
  const deleteName = async (id, name) => { 
    try {
      if (window.confirm(`Haluatko poistaa ${name} numeron?`)) {
        await personsService.remove(id); 
        setNotificationMessage(`'${name}' Poistettu!`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        setPersons(prevPersons => prevPersons.filter(person => person.id !== id));
      }
    } catch (error) {
      setNotificationMessage(`Virhe poistettaessa '${name}'!`); 
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      console.error("Virhe poistettaessa:", error);
    }
  };

  return (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => (
          <div key={person.id}>
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
