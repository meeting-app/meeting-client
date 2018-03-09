import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Item,
  Segment
} from 'semantic-ui-react';

import { fetchAll } from '../../actions/post.js';
import PostFeed from '../feed/PostFeed';

class FeedPage extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    const { feed } = this.props;

    return (
      <Grid container centered columns={2}>
        <Grid.Column>
          <Segment>
            <Item.Group divided>
              { feed.map((data, i) =>
                <Item key={i}>
                  <PostFeed {...data} />
                </Item>
              )}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

FeedPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    feed: state.post.feed
  };
}

export default connect(mapStateToProps, { fetchAll })(FeedPage);
