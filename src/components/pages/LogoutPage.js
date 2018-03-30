import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Logout action
import { logout } from '../../actions/user';

class LogoutPage extends React.Component {

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <Redirect to='/login' />
    );
  }
}

LogoutPage.propTypes = {
};

export default connect(null, { logout })(LogoutPage);
