import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Navigation from './Navigation'
import Person from './Team/Person'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={6} style={{ height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>
                <img src='./src/imgs/mob_logo.png' />
              </div>
          </Col>
          <Col sm={6} style={{ height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ height: 200, color: '#484848' }}>
                <h1 style={{ fontWeight: 900 }}>
                  m o b
                </h1>
                <h3 style={{ fontWeight: 300, paddingBottom: 5 }}>
                  ERC20 exchange network
                </h3>
                <Navigation />
              </div>
          </Col>
        </Row>
        <Row style={{ height: 400, backgroundColor: '#484848' }}>
          <Person />
        </Row>
      </div>
    )
  }
}
