import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // Controlling state
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then(response => {
           setPersons(response.data)
           console.log(response.data)
         }) 
  }, [])

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
     
      <Filter 
      filter={filter} 
      setFilter={setFilter} 
      handleChangeFilter={handleChangeFilter}
      />
      <h2>Add new</h2>
      
      <PersonForm 
      handleAddPerson={handleAddPerson} 
      handleChangeName={handleChangeName} 
      handleChangeNumber={handleChangeNumber} 
      newName={newName} 
      newNumber={newNumber} /> 

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
      
    </div>
  )
}

export default App