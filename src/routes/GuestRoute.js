import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => !isAuthenticate ? <Component {...props} /> : <Redirect to='/' />}
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  }
};

export default withRouter(connect(mapStateToProps)(GuestRoute));

