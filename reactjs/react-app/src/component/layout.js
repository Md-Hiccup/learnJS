/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  render(){
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Layout;