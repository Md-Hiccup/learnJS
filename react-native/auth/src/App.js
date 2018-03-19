import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA66aZP9YvjNWoB3gxTEPdbU9nooscmzXA",
      authDomain: "authentication-2a3fb.firebaseapp.com",
      databaseURL: "https://authentication-2a3fb.firebaseio.com",
      projectId: "authentication-2a3fb",
      storageBucket: "authentication-2a3fb.appspot.com",
      messagingSenderId: "426444523169"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render(){
    return (
      <View>
        <Header headerText= 'Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
