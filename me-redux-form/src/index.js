import React from 'react';
import ReactDOM from 'react-dom'; 
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './codes/reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { addTodo, toggleTodo, visiblityFilter, fetchPost } from './codes/actions'
import './index.css';
import App from './codes/containers/App';
import AnotherApp from './codes/containers/AnotherApp';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
// const store = createStore(
  rootReducer, composeEnhancers(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )));

const Root = ({store}) => {
  return(
  <Provider store={store} >
    <Router>
      <div>
          <div id="main-header">
            <nav >
              <ul>
                <li>
                  <Link to="/">
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link to="/another">
                    صفحه دوم
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        <Route exact path="/" component={App} />
        <Route path="/another" component={AnotherApp} />
      </div>
    </Router>
  </Provider>
  );
}

ReactDOM.render(
  <Root store={store} />
  , document.getElementById('root')
);

store.dispatch(addTodo('addddmeeeeeee plzzzzz'));
store.dispatch(addTodo('1i dg '));
store.dispatch(toggleTodo(101));
store.dispatch(visiblityFilter('COMPLETED'));


store.dispatch(fetchPost('marzzy'));
store.dispatch(fetchPost('ali'));