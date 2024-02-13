import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040123456" },
    { name: "Ada Lovelace", number: "0452359411" },
    { name: "Dan Abramov", number: "0491209455" },
    { name: "Kari Martikainen", number: "0452350455" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter{" "}
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name..."
        />
      </div>
      <form onSubmit={addName}>
        <h2>Add a new number</h2>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => {
          if (filter === "") {
            return person;
          } else if (person.name.toLowerCase().includes(filter.toLowerCase())) {
            return person;
          }
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default App;
