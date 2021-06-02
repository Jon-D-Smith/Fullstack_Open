
import axios from 'axios'
import { useEffect, useState } from 'react';
import Display from './components/Display'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [destination, setDestination] = useState({})

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value) 
    setFilteredList(countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase())))
    if(filteredList.length){
      setDestination(filteredList[0])
    }
  }

  const handleShowCountry =  (e) => {
    setSearchTerm('')
    filteredList.map(obj => {
      if(e.target.id === obj.name){
        setDestination(obj)
        setFilteredList([obj])   
      }      
    })
  }

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)          
      })  
    }, [])

  return (
    <div className="App">    
      find countries: <input value={searchTerm} onChange={handleSearchChange} />
      <Display filteredList={filteredList} handleShowCountry={handleShowCountry} destination={destination} />
    </div>
  );
}

export default App;
