import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/user';

class SignupPage extends React.Component {

  submit = data =>
    this.props.signup(data).then(() => {
      //this.props.history.push('/feed');
    });

  render() {
    return (
      <Grid container>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <SignupForm submit={this.submit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

SignupPage.propTpes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { signup })(SignupPage);
