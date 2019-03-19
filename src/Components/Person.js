import React, { Component } from "react"

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 66
    }
  }
  updateAge = () => {
    console.log("I have no idea what's happeneing")
    this.setState({ age: 77 })
  }

  render() {
    return (
      <div>
        <h1> Hello, world!</h1>
        <h2 onClick={this.updateAge}>I am a {this.state.age} years old.</h2>
        <h3> Today is {this.props.today} </h3>
        <h3 onClick={this.props.changeCourse}> {this.props.course} </h3>
      </div>
    )
  }
}

export default Person
