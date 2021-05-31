import React, { useState } from 'react'


const App = () => {
  // Controlling state
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  // handling the onChange events in the form
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }  
  
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  // Show people based on filter
  const personsToShow = filter.length === 0 ? persons : persons.filter(person => person.name.includes(filter))


  // Adding a new person
  const handleAddPerson = (e) => {
    e.preventDefault() 
    const newPerson = {
      id:persons.length+1,
      name: newName,
      number: newNumber
    }

    // Check to see if they exist in the persons array
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
      <form >
        Filter List <input value={filter} onChange={handleChangeFilter} />
      </form>

      <h2>Add new</h2>
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
      {/* Looping through the persons object to display persons */}
      {personsToShow.map(person => {
        return(
        <p key={person.id}>{person.name}  {person.number}</p>

      )})}
    </div>
  )
}

export default App