/**
 * Created by hussain on 19/9/17.
 */
import React ,{Component} from 'react';

class Favorites extends Component {
    render(){
        const containerStyle = {
            marginTop: "60px"
        };
        return (
            <div className="container" style={containerStyle}>
                <h3>Favorites</h3>
            </div>
        )
    }
}

export default Favorites;