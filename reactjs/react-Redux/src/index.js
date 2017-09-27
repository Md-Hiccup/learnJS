
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './component/layout';

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);








//
// /*  On Developer Mode checked : Object.assign({}, a ,{name:'Will"}); b = a.things.concat(3); filter, map, reduce*/
//
// import { applyMiddleware, combineReducers, createStore} from 'redux';
// import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import promise from "redux-promise-middleware";
//
// const initialState = {
//     fetching: false,
//     fetched: false,
//     users: [],
//     error: null,
// };
// const reducer = (state=initialState, action) => {
//     switch (action.type) {
//         case "FETCH_USERS_PENDING": {
//             return {...state, fetching: true};
//             // break;
//         }
//         case "FETCH_USERS_REJECTED": {
//             return {...state, fetching: false, error: action.payload};
//             // break;
//         }
//         case "FETCH_USERS_FULFILLED": {
//             return {
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 users: action.payload,
//             }
//             // break;
//         }
//     }
//     return state
// }
// const middleWare = applyMiddleware(promise(),thunk,createLogger());
//
// const store = createStore(reducer, middleWare);
//
// /* using promise */
// store.dispatch({
//     type:"FETCH_USERS",
//     payload: axios.get('http://rest.learncode.academy/api/wstern/users')
// })
//
// /* using thunk axios */
// // store.dispatch((dispatch) => {
// //     dispatch({type: "FETCH_USERS_START"});
// //     axios.get('http://rest.learncode.academy/api/wstern/users')
// //         .then((response) => {
// //             dispatch({type:"RECEIVE_USERS", payload: response.data})
// //         }).catch((err) => {
// //             dispatch({type:"FETCH_USERS_ERROR", payload:err})
// //         })
// // })
//
