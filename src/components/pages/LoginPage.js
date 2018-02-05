import React from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';

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
            <LoginForm submit={this.submit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginPage;
