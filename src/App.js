import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import todoApp from './reducers'
import Todos from './Todos'
import Test from './Test'
import router from 'router'
import { BrowserRouter as Router, Route, Link,Redirect  } from "react-router-dom";
import About from './route/About'
import Property from './components/Property'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Propertyform from './components/Propertyform'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(todoApp, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Test/>
            <Route exact path="/" component={Todos}/>
            <Route path="/property" component={Property}/>
            <Route path="/form/:id/edit"  render={(props) => <Propertyform {...props} />}/>
        </Provider>
      </Router>
    );
  }
}
export default App;
