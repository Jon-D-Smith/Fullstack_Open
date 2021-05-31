import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    {id:1, name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleAddName = (e) => {
    e.preventDefault() 
    const newPerson = {id:persons.length+1,name: newName}

    const alreadyExists = persons.some(person => person.name === newName);
    if(alreadyExists){
      return alert(`${newName} is already in the phonebook`)

    } else {
      return (
        setPersons(persons.concat(newPerson)),
        setNewName('')
      )
      
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return(
        <p key={person.id}>{person.name}</p>
      )})}

      <div>
        debug: {newName}
      </div>
    </div>
  )
}

export default App