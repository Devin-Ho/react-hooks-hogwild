import PigInfo from "./PigInfo";
import {useState} from 'react'

function DisplayPig ({name, image, greased, weight, specialty}) {
  const [showInfo, setInfo] = useState(false)

  const handleChange = () => {
    setInfo(!showInfo)
  }
  return (
    <div className = "ui four wide column pigTile" onClick = {handleChange}>
      <h2>{name}</h2>
      <img className = "tile-img" src = {image} alt = {name} />
      {showInfo ? <PigInfo specialty = {specialty} greased = {greased} weight = {weight} /> : null}
      {/* showInfo && <PigInfo specialty = {specialty} greased = {greased} weight = {weight} />}*/}
    </div>
  )
}

export default DisplayPig;