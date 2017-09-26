import React ,{Component} from 'react';

import Todo from './todo';
import TodoStore from '../stores/todoStore';
import * as TodoActions from '../actions/todoAction';

class Layout extends Component {
    constructor(){
        super();
        this.getTodo = this.getTodo.bind(this);
        this.state = {
            todos : TodoStore.getAll()
        };
    }
    componentWillMount(){
        console.log('count Mount'+ TodoStore.listenerCount('change'));
        TodoStore.on('change', this.getTodo );
    }

    componentWillUnmount(){
        // console.log('count Unmount'+ TodoStore.listenerCount('change'));
        TodoStore.removeListener('change', this.getTodo );
    }
    getTodo(){
        this.setState({
            todos: TodoStore.getAll()
        })
    }

    reloadTodo(){
        TodoActions.reloadTodo();
    }
    // createTodo(){
    //     TodoActions.deleteTodo();
    // }
    render(){
        const containerStyle = { marginTop: "60px" };
        const {todos} = this.state;
        const TodoComp = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });
        return (
            <div className="container" style={containerStyle}>
                <button onClick={this.reloadTodo.bind(this)}>Reload!</button>
                {/*<button onClick={this.createTodo.bind(this)}>Create!</button>*/}
                <h3>Todo List</h3>
                <ul>{TodoComp}</ul>
            </div>
        )
    }
}

export default Layout;