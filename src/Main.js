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
              <Center>
                <h1 style={{
                  paddingBottom: 20,
                  color: '#484848'
                }}>
                  m o b
                </h1>
              </Center>
              <Center>
                <img src='./src/imgs/mob_logo.png' />
              </Center>
            </Col>
          </Center>
        </Row>
      </Grid>
    )
  }
}
