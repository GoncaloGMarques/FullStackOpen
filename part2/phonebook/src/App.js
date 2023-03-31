import { useEffect, useState } from 'react'
import axios from "axios";

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchStr, setSearchStr] = useState('')

  function onCLickAddPerson(event) {
    event.preventDefault();
    if (persons.some((person) => person.name == newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (persons.some((person) => person.number == newNumber)) {
      let foundPhone = persons.filter((element) => element.number == newNumber)[0]
      alert(`${newNumber} is already added to phonebook as ${foundPhone.name}`);
      return;
    }
    setPersons(persons.concat({ id: persons.length + 1, name: newName, number: newNumber }))
    setNewName('');
  }

  function onChangeName(event) {
    setNewName(event.target.value);
  }

  function onChangeNumber(event) {
    setNewNumber(event.target.value);
  }

  function onChangeSearchParam(event) {
    setSearchStr(event.target.value);
  }

  let controls = [
    {
      label: 'name',
      changeCallback: onChangeName
    }, {
      label: 'number',
      changeCallback: onChangeNumber
    }
  ]
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((personsData) => {
      console.log(personsData);
      setPersons(personsData?.data);
    });
  }, []);

  const numbersToShow = searchStr != '' ? persons.filter((person) => person.name.toLowerCase().includes(searchStr.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeCallback={onChangeSearchParam} />
      <h2>Add a new</h2>
      <PersonForm controls={controls} submitCallback={onCLickAddPerson} />
      <h2>Numbers</h2>
      {numbersToShow.length != 0 &&
        <Persons listOfNumbers={numbersToShow} />
      }
    </div>
  )
}

export default App