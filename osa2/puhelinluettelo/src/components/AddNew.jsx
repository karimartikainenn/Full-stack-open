import React, { useState } from "react";
import personsService from "../services/persons";

function AddNew({ addPerson, setNotificationMessage }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addOrUpdatePerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      updatePerson(existingPerson.id, nameObject);
    } else {
      addNewPerson(nameObject);
    }

    setNewName("");
    setNewNumber("");
  };

  const updatePerson = (id, updatedPerson) => {
    personsService
      .update(id, updatedPerson)
      .then((response) => {
        console.log("Päivitys onnistui:", response);
        setNotificationMessage(
          `Henkilön '${updatedPerson.name}' numero päivitetty!`
        );
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Virhe päivityksessä:", error);
      });
  };

  const addNewPerson = (newPerson) => {
    personsService
      .create(newPerson)
      .then((response) => {
        console.log("Lisäys onnistui:", response);
        setNotificationMessage(`Henkilö '${newPerson.name}' lisätty!`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        addPerson(response.data);
      })
      .catch((error) => {
        console.error("Virhe lisäyksessä:", error);
      });
  };

  const handleNoteChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addOrUpdatePerson}>
      <div>
        name: <input value={newName} onChange={handleNoteChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <br />
        <button type="submit">Lisää / Päivitä</button>
      </div>
    </form>
  );
}

export default AddNew;
