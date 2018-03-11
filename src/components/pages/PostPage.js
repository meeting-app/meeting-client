import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { create } from '../../actions/post';
import PostForm from '../forms/PostForm';

class PostPage extends React.Component {

  submit = data =>
    this.props.create(data).then(() => {
      this.props.history.push('/feed');
    });

  render() {
    return (
      <Grid container>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <PostForm submit={this.submit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

PostPage.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { create })(PostPage);
