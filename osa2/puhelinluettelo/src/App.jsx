import React, { useState, useEffect } from "react";
import personsService from "./services/persons";
import AddNew from "./components/AddNew";
import Filter from "./components/Filter";
import Render from "./components/Render";
import Notification from "./components/Notification";
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null)

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
      <Notification message={notificationMessage} />
      <Filter setFilter={setFilter} />
      <h2>Lisää numero</h2>
      <AddNew addPerson={addPerson} persons={persons} setNotificationMessage={setNotificationMessage} />
      <h2>Numerot</h2>
      <Render persons={persons} filter={filter} setPersons={setPersons} setNotificationMessage={setNotificationMessage} />
    </div>
  );
};

export default App;
