import React from 'react'

const Note = ({ id, title, userId, completed }) => {

  return(
    <li>
      <h2>{title}</h2>
      <h3>{userId}</h3>
      <h4>{completed}</h4>
    </li>
  )
}

export default Note
