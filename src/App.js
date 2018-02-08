import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navigations/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ProfilePage from './components/pages/ProfilePage';
import PostPage from './components/pages/PostPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Navbar} />
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/post' exact component={PostPage} />
        <Route path='/profile/@:username' exact component={ProfilePage} />
      </div>
    );
  }
}

export default App;
