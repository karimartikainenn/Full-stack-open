import { useState } from "react";
import axios from "axios";

function AddNew({ addPerson, persons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    axios.post("http://localhost:3001/persons", nameObject)
      .then((response) => {
        console.log(response);
        addPerson(response.data);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        console.error("Virhe pyynnössä:", error);
      });
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
        <br />
        <button type="submit">Lisää</button>
      </div>
    </form>
  );
}

export default AddNew;
