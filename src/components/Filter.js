
function Filter ({handleCheckBox, handleFilter, checkBox, filter}) {

  return (
    <form>
      <div> Greasy?
      <input type = "checkbox" checked = {checkBox ? "True" : ""} onChange = {handleCheckBox}></input>
      </div>
    <select onChange = {handleFilter} value = {filter}>
      <option value = "All">All</option> 
      <option value = "Name">Name</option> 
      <option value = "Weight">Weight</option> 
    </select>
    </form>
  )
}

export default Filter;