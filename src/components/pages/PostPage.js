import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostForm from '../forms/PostForm';

class PostPage extends React.Component {

  /*
   * TODO: Implement submit
   */
  submit = data => console.log('data submit', data);

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
};

export default PostPage;
