import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  // Controlling state
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageClass, setMessageClass] = useState('')


  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
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


  //Deleting people
  const handleDeletePerson = (e) => {
    e.preventDefault()
    const id = e.target.id
    const targetPerson = persons.find(person => person.id == id)
    const target = targetPerson.name 
    setPersons(persons.filter(person => person.name !== target))
    personService.deleteOne(id, target)
    .then(
      setMessageClass('success'),
      setMessage(`${targetPerson.name} deleted`),
      setTimeout(() => {
      setMessage(null)
      setMessageClass('')
    }, 5000)
    )
    .catch( error => {
      return(
        setMessageClass('error'),
        setMessage(`${targetPerson.name} has already been removed from the server`),
        setTimeout(() => {
          setMessage(null)
          setMessageClass('')
        }, 5000)
      )
      
    }

  )
    
  }

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
          setNewNumber(''),
          setMessageClass('success'),
          setMessage(`${newPerson.name} updated`),
          setTimeout(() => {
            setMessage(null)
            setMessageClass('')
          }, 5000)
        )
      )

    } else {
      return (
        personService.create(newPerson)
             .then(returnedPerson => setPersons(persons.concat(returnedPerson)),
             setNewName(''),
             setNewNumber('')),
             setMessageClass('success'),
             setMessage(`${newPerson.name} added`),
             setTimeout(() => {
             setMessage(null)
             setMessageClass('')
          }, 5000)
        
      )
      
    }
    
  }

 



  return (
    <div>
      <h2>Phonebook</h2>
     <Notification message={message} messageClass={messageClass} />
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