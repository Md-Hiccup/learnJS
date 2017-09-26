/**
 * Created by hussain on 22/9/17.
 */
import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type : 'CREATE_TODO',
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type : 'DELETE_TODO',
        id,
    });
}

export function reloadTodo() {
    dispatcher.dispatch({type: 'FETCH_TODO'});
    setTimeout(() => {
        dispatcher.dispatch({type: 'RECEIVE_TODO', todos: [
        {
            id : 12234,
            text : 'Go Shopping Again',
            complete : false
        },
        {
            id : 454326,
            text : 'Pay Ur GF Bills',
            complete : false
        }
        ]});
    }, 1000);
}
