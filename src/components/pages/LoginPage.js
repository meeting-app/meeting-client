import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';
import { signin } from '../../actions/user';

class LoginPage extends React.Component {

  submit = data =>
    this.props.signin(data).then(() => {
      this.props.history.push('/feed');
    });

  render() {
    return (
      <Grid container>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <LoginForm submit={this.submit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  signin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { signin })(LoginPage);
