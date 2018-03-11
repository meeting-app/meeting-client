import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/navigations/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ProfilePage from './components/pages/ProfilePage';
import PostPage from './components/pages/PostPage';
import FeedPage from './components/pages/FeedPage';

// User actions
import { fetchCurrent } from './actions/user';

// Routes wrapper
import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute';

class App extends Component {

  componentDidMount() {
    if (localStorage.userJWT) {
      this.props.fetchCurrent();
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Route path='/' exact component={HomePage} />
        <GuestRoute path='/login' exact component={LoginPage} />
        <GuestRoute path='/signup' exact component={SignupPage} />
        <UserRoute path='/post' exact component={PostPage} />
        <UserRoute path='/feed' exact component={FeedPage} />
        <Route path='/profile/@:username' exact component={ProfilePage} />
      </Fragment>
    );
  }
}

export default connect(null, { fetchCurrent })(App);
