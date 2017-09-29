import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchUser} from '../actions/userActions';
@connect((store) => {
    return {
        user : store.user.user,
        userFetched : store.user.fetched,
        tweets : store.tweets.tweets
    };
})
class Layout extends Component {
    componentWillMount(){
        this.props.dispatch(fetchUser());
    }
    render(){
        console.log(this.props);
        return (
            <div className="container">
                <h2>Main page Layout</h2>
                <h3>{this.props.user.name}</h3>
            </div>
        )
    }
}

export default Layout;