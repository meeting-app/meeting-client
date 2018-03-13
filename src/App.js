import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/navigations/Navbar';
import ErrorPage from './components/pages/ErrorPage';
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
        <Switch>
          <Route path='/' exact component={HomePage} />
          <GuestRoute path='/login' component={LoginPage} />
          <GuestRoute path='/signup' component={SignupPage} />
          <UserRoute path='/post' component={PostPage} />
          <UserRoute path='/feed' component={FeedPage} />
          <Route path='/profile/@:username' component={ProfilePage} />
          <Route component={ErrorPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect(null, { fetchCurrent })(App);
