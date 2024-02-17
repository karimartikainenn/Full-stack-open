import { useState, useEffect } from "react";
import axios from "axios";
import AddNew from "./components/AddNew";
import Filter from "./components/Filter";
import Render from "./components/Render";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
