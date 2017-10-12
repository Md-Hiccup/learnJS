import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={users: []};
    }

    componentDidMount() {
        fetch('/users')
            .then(res =>{ return res.json()})
            .then(users => {console.log('user ', users);this.setState({ users })});
    }
    render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <h1>User</h1>
                {this.state.users.map(user =>
                    <div key={1}><h3>Name: {user.name}</h3></div>
                )}
            </div>
        </div>
    );
  }
}

export default App;
