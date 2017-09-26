/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Footer from '../component/footer'
class Layout extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-lg-12">
              <h1>Home</h1>
              {/*{this.props.match}*/}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout;