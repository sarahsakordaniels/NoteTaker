import React from 'react'

import Note from '../Note/Note'

const NoteList = ({ notes }) => {
  const noteList = notes.map(note => <Note key={note.id} {...note} />)

  return(
    <div>
      {noteList}
    </div>
  )
}

export default NoteList
