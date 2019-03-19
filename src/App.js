import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Person from "./Components/Person"
import Clock from "./Components/Clock"

const newDate = new Date()
const today = `${newDate}`
const year = `${newDate}`.split(" ")[3]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: year - 1992,
      today: today,
      course: "This is a thing Liz is teaching"
    }
  }
  changeCourse = () => {
    console.log("testing this")
    this.setState({ course: "here is be" })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person
            age={this.state.age}
            today={this.state.today}
            course={this.state.course}
            changeCourse={this.changeCourse}
          />
          <Clock />
        </header>
      </div>
    )
  }
}

export default App
