import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AxiosGetRequest from '../apiRequests/AxiosGetRequest';

class App extends Component {
  render() {
    return (
      <AxiosGetRequest />
    )
  }
}
export default App;