import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid } from 'semantic-ui-react';

class SignupForm extends React.Component {

  state = {
    data: {
      username: '',
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
          label='Username'
          type='text'
          id='username'
          name='username'
          placeholder='username'
          value={data.username}
          onChange={this.onChange}
        />
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
            <Button color='violet'>Sign Up</Button>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;

