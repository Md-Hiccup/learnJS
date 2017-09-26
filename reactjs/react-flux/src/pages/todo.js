/**
 * Created by hussain on 19/9/17.
 */
import React ,{Component} from 'react';

class Todo extends Component {
    render(){
        const {  text } = this.props;
        return (
            <li>
                <span>{text}</span>
            </li>
        )
    }
}

export default Todo;