/**
 * Created by hussain on 26/8/17.
 */
import React, {Component} from 'react';
import Article from '../component/layout/article'

class About extends Component {
  render() {
    const containerStyle = {
      marginTop : '60px'
    };

    const Articles = [
      'Some Article',
      'Some Other Article',
      'Yet Some Article',
      'Some more  Article',
      'Some famous Article',
      'Some not famous Article',
    ].map((title, index) => <Article key={index} title={title}/>);

    const adText = [
      'Ad spot #1',
      'Ad spot #2',
      'Ad spot #3',
      'Ad spot #4',
      'Ad spot #5'
    ];

    const randomAd = adText[Math.round( Math.random()*(adText.length-1))];

    return (
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col m 5">
            <div className="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m4">
            {Articles}
          </div>
        </div>
      </div>
    )
  }
}
export default About;