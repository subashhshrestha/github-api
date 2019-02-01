import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './screens/home';
import Search from './screens/search';
import About from './screens/about';
import Navbar from './component/navbar';
import Profile from './screens/profile';
class App extends Component {
  state={
    subash:"subash"
  }
  render() {
    return (
      <div className="main">
        <div className="navbarContent">
        <Navbar/>
        </div>
        <div className="content">     
           <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/about' component={About}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
