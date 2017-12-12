import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students: [],
    }
  }
    componentDidMount() {
      axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => (
        this.setState({
          students: res.data
        })
      ))
    }
  

  render() {
    let students = this.state.students.map((e, i) => {
      return (
        <div key={i}>
          <h3>
            <p>{e.first_name} {e.last_name}</p>
          </h3>
        </div>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          {students}
      </div>
    )
  }
    
}