import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchUser} from '../actions/userActions';
import {fetchTweets} from '../actions/tweetActions';

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
    fetchTweets(){
        this.props.dispatch(fetchTweets());
    }
    render(){
        const {user ,tweets} = this.props;

        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>Load Tweets</button>
        }
        console.log(this.props);
        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
        return (
            <div className="container">
                <h2>Main page Layout</h2>
                <h3>{this.props.user.name}</h3>
                <ul>
                    {mappedTweets}
                </ul>
            </div>
        )
    }
}

export default Layout;