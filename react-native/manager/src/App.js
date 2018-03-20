import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase'
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDuVpt1QeeVLZIYunIubbls2X2vFPns1f4",
      authDomain: "manager-ddc65.firebaseapp.com",
      databaseURL: "https://manager-ddc65.firebaseio.com",
      projectId: "manager-ddc65",
      storageBucket: "",
      messagingSenderId: "413831030864"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
        </View>
      </Provider>
    )
  }
}

export default App;
