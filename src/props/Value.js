function Value(props){ 

  return (
    <div className="props">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>City : {props.city}</p>
    </div>
  )
}

export default Value;
