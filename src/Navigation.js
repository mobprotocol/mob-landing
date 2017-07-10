import React, { Component } from 'react'
import { MuiThemeProvider, RaisedButton } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
export default class Navigation extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Code" primary={true}></RaisedButton>
          <RaisedButton label="Whitepaper"></RaisedButton>
          <RaisedButton label="Alpha"></RaisedButton>
          <RaisedButton label="Sale"></RaisedButton>
        </div>
      </MuiThemeProvider>
    )
  }
}
