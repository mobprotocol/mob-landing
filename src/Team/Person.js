import React, { Component } from 'react'

export default class Person extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style = {{ width: 250, height: 300, color: 'white' }}>
        <img src='./src/imgs/sean_team.JPG' />
        <h4 style={{ fontWeight: 200 }}>Sean Pollock | Engineer</h4>
        <p></p>
      </div>
    )
  }
}
