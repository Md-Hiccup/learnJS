import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import 'es6-promise';

class App extends Component {
   state ={users: [{
       id: 4,
       username:'pal'
   }]};

    componentDidMount() {
        fetch('/users')
            .then(res =>{ return res.json()})
            .then(users => {console.log('user ', users);this.setState({ users })});

    }
    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>user : {user.name} &nbsp; Password: {user.password}</div>
                )}
            </div>
        );
    }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
