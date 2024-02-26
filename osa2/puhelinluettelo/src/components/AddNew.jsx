import React, { useState } from "react";
import personsService from "../services/persons"

function AddNew({ addPerson, setNotificationMessage }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    personsService.create(nameObject)
      .then((response) => {
        console.log("Lisäys onnistui:", response);
        setNotificationMessage(` '${nameObject.name}' lisätty!`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        addPerson(response.data);
      })
      .catch((error) => {
        console.error("Virhe lisäyksessä:", error);
        setNotificationMessage(`Virhe lisäyksessä: ${error.message}`)
      });

    setNewName("");
    setNewNumber("");
  };

  const handleNoteChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNoteChange} /> <br></br>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <br />
        <button type="submit">Lisää</button>
      </div>
    </form>
  );
}

export default AddNew;
