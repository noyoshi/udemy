import React from 'react'

const person = (props) => {
  return (
    <div>
      <h2>NAME: {props.name}</h2>
      <h4>AGE: {props.age}</h4>
    <input type="text" onChange={props.onChange} value={props.name} />
  <button onClick={props.click}>
    Delete me!
  </button>
    </div>
  )
}

export default person
