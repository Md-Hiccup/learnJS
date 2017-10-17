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
        fetch('/login',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            method: 'post',
            body : JSON.stringify({a: 1, b: 2})
        })
            .then(res => {console.log("a",res); return res.json();})
            .then(data => {console.log('Request succeeded with JSON response', data)});
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
                    <div key={1}><h3>Name: {user.name} &nbsp; Pass: {user.pass}</h3></div>
                )}
            </div>
        </div>
    );
  }
}

export default App;
