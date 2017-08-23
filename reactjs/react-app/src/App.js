import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = { currentEvent : '----', a: '', b:'', val: 0}
    this.update = this.update.bind(this)
    }
  update(e){
   // this.setState({currentEvent : e.type})
    this.setState({
      a: this.refs.a.value,
      b: ReactDOM.findDOMNode(this.b).value,
      c: this.c.refs.in.value,
      val : this.state.val + 1
    })
  }
  componentWillMount(){
    console.log('componentWillMount');
    this.setState({m : 2})
  }
  render(){
    console.log('render');
    return (
        <div>
          <h1>Hello React World!!</h1>
          <h2>{this.props.txt} and {this.props.cat} and {this.props.defd}</h2>
          <Button>I <Heart /> React</Button><br/><br />
          <input
            ref="a"
            type="text"
            onChange={this.update.bind(this)}
          />{this.state.a}<br />
          <input
            ref={ component => this.b = component}
            type="text"
            onChange={this.update.bind(this)}
          />{this.state.b}
          <Input
            ref={ component => this.c = component}
            update={this.update.bind(this)}
          />{this.state.c}
          <Title text="123453"/>
          {/*   <textarea
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
            <h1>{this.state.currentEvent}</h1> */}

          <button onClick={this.update}>{this.state.val * this.state.m}</button>

        </div>
    )
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.inc = setInterval(this.update, 500)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.inc)
  }
}
// Custom propTypes validation
const Title = (props) => <h1>Title : {props.text}</h1>
Title.propTypes = {
  text(props, propName, componentName){
    if(!(propName in props)){
      return new Error('missing '+ propName)  // <title />
    }
    if(props[propName].length < 6){
      return new Error(propName+' was too short')  // text = 12345
    }
  }
}
// Access Nested data using props.children
class Heart extends Component {
  render(){
    return <span>&hearts;</span>
  }
}
const Button = (props) => <button>{props.children}</button>

class Input extends Component{
  render(){
    return <div><input ref='in' type="text" onChange={this.props.update}/></div>
  }
}
App.propTypes = {
  txt : React.PropTypes.string,
  cat : React.PropTypes.number,
}
App.defaultProps = {
  defd : "This is the default text"
}
// const App = () => <h1>Hello React</h1>;    // stateless function component

class Wrapper extends Component{
  mount(){
    ReactDOM.render(<App/>, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
    <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="a"></div><br/>
    </div>
    )
  }
}
export default Wrapper;
