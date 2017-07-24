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
  constructor(){
    super();
    this.state = {
      stateText : 'this is the state text',
      date : new Date()
    }
  }
  update(e){
    this.setState({stateText : e.target.value})
  }

  render() {
    let txt = this.props.txt
    //let defd = this.props.defd
    return (
        <div>
          <input type="text" onClick={this.update.bind(this)} />
          <h1>Hello React World!!</h1>
          <h2>{txt} and {this.props.cat} and {this.props.defd}</h2>
          <h3>{this.state.stateText}</h3>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
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
