import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchStr, setSearchStr] = useState('')

  function onCLickAddPerson(event) {
    event.preventDefault();
    if (persons.some((person) => person.name == newName )) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (persons.some((person) => person.number == newNumber )) {
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

  const numbersToShow = searchStr != '' ? persons.filter((person) => person.name.toLowerCase().includes(searchStr.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input onChange={onChangeSearchParam} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={onCLickAddPerson}>
        <div>
          name: <input onChange={onChangeName} />
        </div>
        <div>
          number: <input onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        numbersToShow.map((person) =>
          <div key={person.id}>{person.name} - {person.number} </div>
        )
      }
    </div>
  )
}

export default App