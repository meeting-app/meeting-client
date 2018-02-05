import React from 'react';
import { Grid } from 'semantic-ui-react';
import SignupForm from '../forms/SignupForm';

class LoginPage extends React.Component {

  /*
   * TODO: Implement submit
   */
  submit = data => console.log('data submit', data);

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

export default LoginPage;
