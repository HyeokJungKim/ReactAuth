import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Header from './Components/Header'
import ProfileContainer from './Containers/ProfileContainer'
import LoginForm from './Components/LoginForm'

class App extends Component {
  
  state = {
    user: {
      id: 0,
      username: "",
      bio: "",
      snacks: []
    }
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/login" render={()=> <LoginForm/> }/>
          <Route path="/profile" render={()=> <ProfileContainer user={this.state.user}/> }/>
        </Switch>
      </div>
    );
  }

}

export default App;
