import React, { Component } from 'react'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <h1>Mob</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}
