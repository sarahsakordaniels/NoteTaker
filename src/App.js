import React, { Component } from 'react'

import './App.css'
import NoteForm from './NoteForm/NoteForm'
import NoteList from './NoteList/NoteList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const notes = await response.json()
    thist.setState({notes})
  }

  addNote = note => {
    const { notes } = this.state
    const newNote = {...note, id: Date.now()}
    const noteList = [...notes, newNote]
    this.setState({
      notes: noteList
    })
  }

  render() {
    const { notes } = this.state
    return(
      <div>
        <NoteForm addNote={this.addNote} />
        <NoteList notes={notes} />
      </div>
    )
  }
}

export default App
