import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    let txt = this.props.txt
    //let defd = this.props.defd
    return (
        <div>
          <h1>Hello React World!!</h1>
          <h2>{txt} and {this.props.cat} and {this.props.defd}</h2>
        </div>
    )
  }
}

App.propTypes = {
  txt : React.PropTypes.string,
  cat : React.PropTypes.number,
}
App.defaultProps = {
  defd : "This is the default text"
}
// const App = () => <h1>Hello React</h1>;

export default App;
