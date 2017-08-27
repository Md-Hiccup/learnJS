/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'

class Blog extends Component {
  render(){
    console.log(this.props);
    const { match } = this.props;
    return (
      <div>
        <h1>Blog</h1>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}> Rendering with React </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}> Components </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-vs-state`}> Props-vs-State </Link>
          </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (  <h3>Please select a topic.</h3>  )}/>
      </div>
    )
  }
}
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default Blog;