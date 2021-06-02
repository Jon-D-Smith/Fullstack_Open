import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  // Controlling state
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleDeletePerson = (e) => {
    e.preventDefault()
    const id = e.target.id
    const targetPerson = persons.find(person => person.id == id)
    const target = targetPerson.name 
    personService.deleteOne(id, target)
    
  }

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
                
  }, [handleDeletePerson])

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
      const target = persons.find(person => person.name === newName)
      const id = target.id
      
      return(
        
        personService.updateOne(id, target, newPerson)
        .then(
          setNewName(''),
          setNewNumber('')
        )
      )

    } else {
      return (
        personService.create(newPerson)
             .then(returnedPerson => setPersons(persons.concat(returnedPerson)),
             setNewName(''),
             setNewNumber(''))
        
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

      <Persons personsToShow={personsToShow} handleClick={handleDeletePerson} />
      
    </div>
  )
}

export default App