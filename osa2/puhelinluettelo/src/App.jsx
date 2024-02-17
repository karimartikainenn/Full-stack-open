import { useState, useEffect } from "react";
import axios from "axios";
import AddNew from "./components/AddNew";
import Filter from "./components/Filter";
import Render from "./components/Render";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, number: "040123456" },
    { name: "Ada Lovelace", id: 2, number: "0452359411" },
    { name: "Dan Abramov", id: 3, number: "0491209455" },
    { name: "Kari Martikainen", id: 4, number: "0452350455" },
  ]);


  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h2>Add a new number</h2>
      <AddNew addPerson={addPerson} persons={persons} />
      <h2>Numbers</h2>
      <Render persons={persons} filter={filter} />
    </div>
  );
};

export default App;
