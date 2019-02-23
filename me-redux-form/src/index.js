import React from 'react';
import ReactDOM from 'react-dom'; 
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger'
import { logger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './codes/reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { addTodo, toggleTodo, visiblityFilter } from './codes/actions'
import { addTodo, toggleTodo, visiblityFilter, requestUser } from './codes/actions'
import './index.css';
import App from './codes/containers/App';
import GitUser from './codes/containers/AnotherApp';
import FormPage from './codes/containers/FormPage';
import rootSaga from './codes/sagas'

// const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, composeEnhancers(
  applyMiddleware(
    sagaMiddleware,logger
  )));

sagaMiddleware.run(rootSaga);
// const store = createStore(
// // const store = createStore(
//   rootReducer, composeEnhancers(
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     // loggerMiddleware // neat middleware that logs actions
//   )));

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
                <li>
                  <Link to="/myform">
                      صفحه فرم
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        <Route exact path="/" component={App} />
        <Route path="/another" component={GitUser} />
        <Route path="/myform" component={FormPage} />
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


store.dispatch(requestUser('fateme'));
// store.dispatch(fetchPost('ali'));