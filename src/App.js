import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navigations/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ProfilePage from './components/pages/ProfilePage';
import PostPage from './components/pages/PostPage';
import FeedPage from './components/pages/FeedPage';

// UserRoute wrapper
import UserRoute from './routes/UserRoute';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <UserRoute path='/signup' exact component={SignupPage} />
        <UserRoute path='/post' exact component={PostPage} />
        <UserRoute path='/feed' exact component={FeedPage} />
        <Route path='/profile/@:username' exact component={ProfilePage} />
      </Fragment>
    );
  }
}

export default App;
