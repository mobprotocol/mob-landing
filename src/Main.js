import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import Center from 'react-center'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid>
        <Row>
          <Center>
            <Col sm={6}>
              <h1>Mob</h1>
            </Col>
          </Center>
        </Row>
      </Grid>
    )
  }
}
