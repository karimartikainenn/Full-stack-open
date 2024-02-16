import { useState } from "react";
import AddNew from "./components/AddNew";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040123456" },
    { name: "Ada Lovelace", number: "0452359411" },
    { name: "Dan Abramov", number: "0491209455" },
    { name: "Kari Martikainen", number: "0452350455" },
  ]);

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const [filter, setFilter] = useState("");

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
      <h2>Add a new number</h2>
      <AddNew addPerson={addPerson} persons={persons} />
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
