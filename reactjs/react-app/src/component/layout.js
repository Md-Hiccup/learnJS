/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  constructor(){
    super();
    this.state = { title:'Welcome' , name: 'Hiccup' }
  }
  render(){
     setTimeout(() => {
       this.setState({ title : 'Welcome '+ this.state.name})
     },2000);
    return (
      <div>
        <Header title={this.state.title}/>
        <Header title="Other Title"/>
        <Footer />
      </div>
    )
  }
}

export default Layout;