const PersonForm = ({handleAddPerson, handleChangeName, handleChangeNumber, newName, newNumber}) => {
    return ( 
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
     );
}
 
export default PersonForm;