
import axios from 'axios'
import { useEffect, useState } from 'react';
import Display from './components/Display'
import Weather from './components/Weather'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [destination, setDestination] = useState({})
  const [weather, setWeather] = useState({})


  const api_key = process.env.REACT_APP_API_KEY

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
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}=${obj.name}`)
           .then(result => setWeather(result.data))   
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
      {filteredList.length === 1 && <Weather destination={destination} weather={weather} />}
    </div>
  );
}

export default App;
