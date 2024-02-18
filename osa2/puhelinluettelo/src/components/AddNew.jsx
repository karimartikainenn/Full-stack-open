import { useState } from "react";
import axios from "axios";

function AddNew({ addPerson, persons, setPersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const isPerson = persons.find((person) => person.name === newName);
    if (isPerson) {
      if (window.confirm(`${newName} on jo lisätty, haluatko päivittää numeron?`)) {
        axios.put(`http://localhost:3001/persons/${isPerson.id}`, nameObject)
          .then((response) => {
            console.log("Päivitys onnistui:", response);
            const updatedPersons = persons.map((person) =>
              person.id === isPerson.id ? { ...person, number: newNumber} : person
            );
            setPersons(updatedPersons);
          })
          .catch((error) => {
            console.error("Virhe päivityksessä:", error);
          });
      }
    } else {
      axios.post("http://localhost:3001/persons", nameObject)
        .then((response) => {
          console.log("Lisäys onnistui:", response);
          addPerson(response.data);
        })
        .catch((error) => {
          console.error("Virhe lisäyksessä:", error);
        });
    }

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
        name: <input value={newName} onChange={handleNoteChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <br></br>
        <button type="submit">Lisää</button>
      </div>
    </form>
  );
}

export default AddNew;
