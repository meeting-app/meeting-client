import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid } from 'semantic-ui-react';

class PostForm extends React.Component {

  state = {
    data: {
      text: ''
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
        <Form.TextArea
          label='Text'
          id='text'
          name='text'
          placeholder='Type here'
          value={data.text}
          onChange={this.onChange}
        />
        <Grid>
          <Grid.Row centered>
            <Button color='violet'>Submit</Button>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

PostForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default PostForm;
