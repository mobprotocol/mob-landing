import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Person from './Person'

const person_style = {
  isplay: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class Team extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid>
        <h2 style={{ color: 'white', fontWeight: '200', paddingBottom: 15 }}>TEAM</h2>
        <Row>
          <Col sm={4} style={person_style}>
            <Person name='Sean Pollock'/>
          </Col>
          <Col sm={4} style={person_style}>

          </Col>
          <Col sm={4} style={person_style}>

          </Col>
        </Row>
      </Grid>
    )
  }

}
