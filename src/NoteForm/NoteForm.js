import React, { Component } from 'react'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      userId: "",
      completed: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { addNote } = this.props

    addNote(this.state)
    this.setState({
      title: "",
      userId: "",
      completed: ""
    })
  }

  render() {
    const { title, description, subject } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} placeholder="Enter title" onChange={this.handleChange} />
        <input name="userId" value={userId} placeholder="Enter UserId" onChange={this.handleChange} />
        <input name="completed" value={completed} placeholder="Enter completion status" onChange={this.handleChange} />
        <button>Submit Me!</button>
      </form>
    )
  }
}

export default NoteForm
