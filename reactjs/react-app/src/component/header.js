/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Title from './header/title'

class Header extends Component {
  _handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title)
  }

  render(){
    // console.log(this.props);
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this._handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Header;