import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import todoApp from './reducers'
import Todos from './Todos'
import router from 'router'
import { BrowserRouter as Router, Route, Link,Redirect  } from "react-router-dom";
import About from './route/About'
import Property from './components/Property'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Propertyupdate from './components/Propertyupdate'
import Propertyadd from './components/Propertyadd'
// design
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {styles} from './styles/style'
// import { CssBaseline,Drawer,AppBar,Toolbar,
//         List,Typography,Divider,IconButton,Badge
// } from '@material-ui/core';
import * as Material from './link/links'

import Header from './includes/Header'
import Rightbar from './includes/Rightbar'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(todoApp, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <Provider store={store}>
          <div className={classes.root}>
            <Route  path="/" component={() => <Header classes={classes} rightbar={Rightbar} />}/>
            {/* <Route  path="/" component={() => <Rightbar classes={classes} />}/> */}
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
               <div className={classes.tableContainer}>
               <Route path="/property" component={() => <Property classes={classes} />}/>
               <Route path="/add" component={Propertyadd}/>
               <Route path="/form/:id/edit"  render={(props) => <Propertyupdate {...props} />}/>
               <Route  path="/todo" component={Todos}/>
               </div>
            </main>
          </div>
        </Provider>
      </Router>
      // <Router>
      //   <Provider store={store}>
      //       <Route exact path="/" component={Todos}/>
      //       <Route path="/property" component={Property}/>
      //       <Route path="/add" component={Propertyadd}/>
      //       <Route path="/form/:id/edit"  render={(props) => <Propertyupdate {...props} />}/>
      //   </Provider>
      // </Router>
    );
  }
}
export default Material.withStyles(styles)(App);
