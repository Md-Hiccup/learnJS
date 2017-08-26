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

//export default Wrapper;

//*****************  Manage React Component State with Lifecycle Method  *********************
class App1 extends Component {
    constructor (){
    super();
    this.state= {
      increasing : false
      }
    }
    update(){
      ReactDOM.render(
        <App1 val={this.props.val + 1} />,
        document.getElementById('root')  )
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps.val+' componenetWillReceiveProps '+this.props.val);
      this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState){
      console.log(nextProps.val+' shouldComponentUpdate');
      return nextProps.val % 2 === 0;
    }
    render(){
      console.log(this.state.increasing)
      return(
        <button onClick={this.update.bind(this)}>
          {this.props.val}
        </button>
      )
    }
    componentDidUpdate(prevProps, prevState){
      console.log('componentDidUpdate')
      console.log('prevProps : '+ prevProps.val )
    }
  }

App1.defaultProps = { val : 0 }

//export default App1

//**************  Use map to create React Component from Arrays of Data  ***************
class App2 extends Component {
    constructor(){
      super();
      this.state = {
          items : []
      }
    }
    componentWillMount(){
      fetch('http://swapi.co/api/people/?format.json')
        .then( response => response.json())
        .then( ({results: items}) => this.setState({items}) )
    }
    filter(e){
        this.setState({filter: e.target.value})
    }
    render(){
      let items = this.state.items;
      if(this.state.filter){
        items= items.filter( item =>
            item.name.toLowerCase()
              .includes(this.state.filter.toLowerCase()))
      }
      return (
        <div>
          <input type="text" onChange={this.filter.bind(this)}/><br />
          {/*{items.map(item => <h4 key={item.name}>{item.name}</h4>)} */}
          {items.map(item => <Person key={item.name} person={item}/>)}
        </div>
      )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>
//export default App2;