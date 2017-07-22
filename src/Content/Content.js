import React, { Component } from 'react'
import {
  Grid,
  Row,
} from 'react-bootstrap'

import Item from './Item'

export default class Content extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid style={{  padding: 50 }}>
        <Item />
      </Grid>
    )
  }
}
