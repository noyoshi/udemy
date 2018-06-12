import React from 'react'

const toggleView = (props) => {
  return (
    <div>
      <button onClick={props.click}>Toggle List</button>
    </div>
  )
}

export default toggleView;
