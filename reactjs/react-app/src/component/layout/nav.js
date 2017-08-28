/**
 * Created by hussain on 28/8/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;