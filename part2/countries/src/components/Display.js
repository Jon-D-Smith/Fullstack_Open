const Display = ({filteredList, handleShowCountry, destination}) => {
    const Country = ({destination}) => {
    
        return(
          <>
          <h1>{destination.name}</h1>
          <p>Capital {destination.capital}</p>
          <p>Population {destination.population}</p>
          <br />
          <h3>Languages</h3>
          <ul>
            {destination.languages && destination.languages.map(language => <li>{language.name}</li>)}
          </ul>
          <img alt="Country Flag" src={destination.flag} />
          </>
        )
      }
    
    const CountryList = () => {
        return(
        <ul>
          {filteredList.map(item => <li key={item.name}>{item.name}<button id={item.name} onClick={handleShowCountry}>show</button></li>)}
          
        </ul>
        )}
    
    return ( 
        
        
           
              <>
            {(filteredList.length < 10 && filteredList.length > 1) && <CountryList />}
            {filteredList.length === 1 && <Country key={1} destination={destination} />}
            {filteredList.length === 0 && <p>Too many matches. Please be more specific.</p>}
        
            </>
            )
     
}
 
export default Display;