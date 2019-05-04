import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Header from './Components/Header'
import ProfileContainer from './Containers/ProfileContainer'
import SnacksContainer from './Containers/SnacksContainer'
import LoginForm from './Components/LoginForm'

class App extends Component {
  state = {
    allSnacks: [],
    user: {
      id: 0,
      username: "",
      bio: "",
      snacks: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/snacks")
    .then(res => res.json())
    .then(snacks => {
      this.setState({
        allSnacks: snacks
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/login" render={()=> <LoginForm/> }/>
          <Route path="/snacks" render={()=> <SnacksContainer allSnacks={this.state.allSnacks}/> }/>
          <Route path="/profile" render={()=> <ProfileContainer user={this.state.user}/> }/>
        </Switch>
      </div>
    );
  }

}

export default App;
