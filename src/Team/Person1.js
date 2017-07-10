import React, { Component } from 'react'

export default class Person1 extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style = {{ color: 'white', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style = {{ color: 'white', width: '66%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <img src='./src/imgs/sean_team.JPG' />
          <h4 style={{ fontWeight: 200 }}>Sean Pollock | Engineer</h4>
          <p>Full stack engineer. Mathematics major turned javascript geek. Working</p>
        </div>
      </div>
    )
  }
}
