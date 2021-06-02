const Persons = ({personsToShow, handleClick}) => {
    return ( 
        <>
        {personsToShow.map(person => {
            return(
                <>
            <p key={person.id}>{person.name}  {person.number}<button id={person.id} onClick={handleClick} >delete</button></p>
                
                </>
          )})}
          </>
     );
}
 
export default Persons;