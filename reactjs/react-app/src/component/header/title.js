/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';

class Title extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.title}!</h2>
      </div>
    )
  }
}

export default Title;