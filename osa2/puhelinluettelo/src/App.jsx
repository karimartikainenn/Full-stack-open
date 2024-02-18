import { useState, useEffect } from "react";
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
  console.log("render", persons.length, "persons");

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const [filter, setFilter] = useState("");

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter setFilter={setFilter} />
      <h2>Lisää numero</h2>
      <AddNew addPerson={addPerson} persons={persons} />
      <h2>Numerot</h2>
      <Render persons={persons} filter={filter} />
    </div>
  );
};

export default App;
