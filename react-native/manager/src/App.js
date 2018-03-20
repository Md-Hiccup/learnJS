import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // 3 arg. is for store enhancer
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
