import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid } from 'semantic-ui-react';

class LoginForm extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    }
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  /*
   * TODO: Check user input
   */
  onSubmit = e => {
    e.preventDefault();
    const data = this.state.data;
    this.props.submit(data);
  };

  render() {
    const { data } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label='Email'
          type='email'
          id='email'
          name='email'
          placeholder='example@email.com'
          value={data.email}
          onChange={this.onChange}
        />
        <Form.Input
          label='Password'
          type='password'
          id='password'
          name='password'
          placeholder='password'
          value={data.password}
          onChange={this.onChange}
        />
        <Grid>
          <Grid.Row centered>
            <Button color='violet'>Log In</Button>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
