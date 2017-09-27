import React, {Component} from 'react';
import { connect } from 'react-redux';

class Layout extends Component {
    render(){
        console.log(this.pros.user);
        return (
            <div className="container">
                <h2>Main page Layout</h2>
                <h3>{this.props.user}</h3>
            </div>
        )
    }
}

export default Layout;