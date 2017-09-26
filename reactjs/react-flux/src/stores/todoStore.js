/**
 * Created by hussain on 20/9/17.
 */
import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todos = [
            {
                id : 123,
                text : 'Go Shopping',
                complete : false
            },
            {
                id : 456,
                text : 'Pay Electric Bills',
                complete : false
            },
        ]
    }

    createTodo(text){
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete:false,
        });
        this.emit('change');
    }

    getAll(){
        return this.todos;
    }

    handleActions(action){
        console.log("TodoStore recieved an action", action);
        switch (action.type){
            case 'CREATE_TODO': {
                this.createTodo(action.text);
                break;
            }
            case 'RECEIVE_TODO': {
                this.todos = action.todos;
                this.emit('change');
                break;
            }
            // default : console.log('default case');
        }
    }
}
const todoStore = new TodoStore();
//console.log(todoStore);
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
window.todoStore = todoStore;
export default todoStore;