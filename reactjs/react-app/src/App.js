import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = { currentEvent : '----'}
    this.update = this.update.bind(this)
    }
  update(e){
    this.setState({currentEvent : e.type})
  }
  render(){
    let txt = this.props.txt
    return (
        <div>
          <h1>Hello React World!!</h1>
          <h2>{txt} and {this.props.cat} and {this.props.defd}</h2>
          <Widget update = {this.update.bind(this)} />
          <Button>I <Heart /> React</Button>
          <Title text="123453"/>
          <textarea
            onBlur={this.update}
            onFocus={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onKeyPress={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            onDoubleClick={this.update}
            rows="10"
            cols="40" />
            <h1>{this.state.currentEvent}</h1>
        </div>
    )
  }
}
const Title = (props) => <h1>Title : {props.text}</h1>
Title.propTypes = {
  text(props, propName, componentName){
    if(!(propName in props)){
      return new Error('missing '+ propName)
    }
    if(props[propName].length < 6){
      return new Error(propName+' was too short')
    }
  }
}

class Heart extends Component {
  render(){
    return <span>&hearts;</span>
  }
}
const Button = (props) => <button>{props.children}</button>

const Widget = (props) =>
    <input type="text" onChange={props.update} />

App.propTypes = {
  txt : React.PropTypes.string,
  cat : React.PropTypes.number,
}
App.defaultProps = {
  defd : "This is the default text"
}
// const App = () => <h1>Hello React</h1>;    // stateless function component

export default App;
