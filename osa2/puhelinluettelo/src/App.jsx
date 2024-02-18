import React, { useState, useEffect } from "react";
import personsService from "./services/persons";
import AddNew from "./components/AddNew";
import Filter from "./components/Filter";
import Render from "./components/Render";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter setFilter={setFilter} />
      <h2>Lisää numero</h2>
      <AddNew addPerson={addPerson} persons={persons} />
      <h2>Numerot</h2>
      <Render persons={persons} filter={filter} setPersons={setPersons} />
    </div>
  );
};

export default App;
