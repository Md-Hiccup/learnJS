import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA66aZP9YvjNWoB3gxTEPdbU9nooscmzXA",
      authDomain: "authentication-2a3fb.firebaseapp.com",
      databaseURL: "https://authentication-2a3fb.firebaseio.com",
      projectId: "authentication-2a3fb",
      storageBucket: "authentication-2a3fb.appspot.com",
      messagingSenderId: "426444523169"
    });
  }
  render(){
    return (
      <View>
        <Header headerText = 'Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;
