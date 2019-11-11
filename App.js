import React, { Component } from 'react'
import { StyleSheet,View,ScrollView, } from 'react-native';
import AppNavigator from './src/config/router'

class App extends Component {
  render() {
    return (
      <AppNavigator/>
    )
  }
}


export default App;