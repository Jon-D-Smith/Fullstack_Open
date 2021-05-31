const Filter = ({filter, setFilter, handleChangeFilter}) => {



 return ( 
        <form >
        Filter List <input value={filter} onChange={handleChangeFilter} />
      </form>
     );
}
 
export default Filter;