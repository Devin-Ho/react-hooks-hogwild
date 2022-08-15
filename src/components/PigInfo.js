
function PigInfo ({specialty, weight, greased}) {
  return (
    <div>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased ? "True" : "False"}</p>
    </div>
  )
}

export default PigInfo;