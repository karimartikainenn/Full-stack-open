import React from "react";
import axios from "axios";

const Render = ({ persons, filter, setPersons, setNotificationMessage }) => {
  const deleteName = (id, name) => {
    if (window.confirm(`Haluatko poistaa ${name} numeron?`)) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then((response) => {
          setNotificationMessage(`'${name}' Poistettu!`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
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
