import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Person from './Person'
import Person1 from './Person1'
import Person2 from './Person2'

const person_style = {
  display: 'flex',
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
            <Person1 />
          </Col>
          <Col sm={4} style={ person_style, { paddingBottom: 100 }}>
            <Person2 />
          </Col>
        </Row>
      </Grid>
    )
  }

}
