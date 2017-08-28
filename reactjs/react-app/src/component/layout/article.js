/**
 * Created by hussain on 28/8/17.
 */
import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Article extends Component {
  render(){
    console.log(this.props)
    const {title} = this.props;
    return (
      <div className="col-md-4">
        <h2>{title}</h2>
        <p>
          As a heads up, the navbar component is rather tricky here in that the styles for displaying it are rather specific and detailed.
          Overrides to ensure desktop styles display are not as performant or sleek as one would like.
          Just be aware there may be potential gotchas as you build on top of this example when using the navbar.
        </p>
        <a href="#"><Button color='info'>More Info</Button></a>
      </div>
    )
  }
}

export default Article;