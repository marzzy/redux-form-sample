import React from 'react';
import ReactDOM from 'react-dom'; 
import { createStore } from 'redux';
import rootReducer from './codes/reducers';
import { Provider } from 'react-redux';
import { addTodo, toggleTodo, visiblityFilter } from './codes/actions'
import './index.css';
import App from './codes/App';
// import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
);

store.dispatch(addTodo('addddmeeeeeee plzzzzz '));
store.dispatch(addTodo('1i dg '));
store.dispatch(toggleTodo(101));
store.dispatch(visiblityFilter('COMPLETED'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
