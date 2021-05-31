import React, { useState } from 'react'


const App = () => {
  // Controlling state
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')


  // handling the onChange events in the form
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }  
  
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  // Adding a new person
  const handleAddPerson = (e) => {
    e.preventDefault() 
    const newPerson = {
      id:persons.length+1,
      name: newName,
      number: newNumber
    }

    const alreadyExists = persons.some(person => person.name === newName);
    if(alreadyExists){
      return alert(`${newName} is already in the phonebook`)

    } else {
      return (
        setPersons(persons.concat(newPerson)),
        setNewName(''),
        setNewNumber('')
      )
      
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return(
        <p key={person.id}>{person.name}  {person.number}</p>

      )})}

      <div>
        debug: {newName} {newNumber}
      </div>
    </div>
  )
}

export default App