import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    if (newName != "") {
      const newNamePerson = {
        name: newName,
      };
      setPersons(persons.concat(newNamePerson));
      setNewName("");
    } else {
      console.log("The name input should be at least 1 character long.");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePersonSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
