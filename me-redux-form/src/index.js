import React from 'react';
import ReactDOM from 'react-dom'; 
import { createStore } from 'redux';
import rootReducer from './codes/reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { addTodo, toggleTodo, visiblityFilter } from './codes/actions'
import './index.css';
import App from './codes/containers/App';
import AnotherApp from './codes/containers/AnotherApp';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

store.dispatch(addTodo('addddmeeeeeee plzzzzz '));
store.dispatch(addTodo('1i dg '));
store.dispatch(toggleTodo(101));
store.dispatch(visiblityFilter('COMPLETED'));

