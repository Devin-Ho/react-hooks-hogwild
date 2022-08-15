import DisplayPig from "./DisplayPig.js";
import hogs from "../porkers_data";
import { useState } from "react";
import Filter from "./Filter.js";


function PigContainer() {
  const [hogsData, setHogs] = useState(hogs)
  const [filter, setFilter] = useState('All')
  const [checkBox, setCheckBox] = useState(false)

  const handleFilter = (e) => {
    const term = e.target.value
    setFilter(term)
  }

  const handleCheckBox = () => {
    setCheckBox(!checkBox)
  }

  const filterPigs = () => {
    if (checkBox) {
      return [...hogsData].filter(hog => hog.greased)
    } else {
      return [...hogsData]
    }
  }

  const sortPig = () => {
    const pigArray = filterPigs()

    if (filter === "Weight") {
      return pigArray.sort((a, b) => b.weight - a.weight)
    } else if (filter === "Name") {
      return pigArray.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      return pigArray
    }

  }

  // const hogTile = hogsData.map(hog =>
  //   <DisplayPig name={hog.name} image={hog.image} specialty={hog.specialty}
  //     weight={hog.weight} greased={hog.greased} />)


  const hogTile = sortPig().map(hog => <DisplayPig name={hog.name} image={hog.image} specialty={hog.specialty}
    weight={hog.weight} greased={hog.greased} />)

  return (
    <div>
      <div>
        <Filter handleFilter={handleFilter} handleCheckBox={handleCheckBox} filter={filter} checkBox={checkBox} />
      </div>

      <div className="ui grid container">
        {hogTile}
      </div>
    </div>


  )
}

export default PigContainer;