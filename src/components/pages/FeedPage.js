import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Item,
  Rail,
  Segment,
  Sticky
} from 'semantic-ui-react';

import PostFeed from '../feed/PostFeed';

class FeedPage extends React.Component {

  state = {};

  componentDidMount() {
    /*
     * TODO: Fetch feed
     */
  }

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;
    const { feed } = this.props;

    return (
      <Grid container centered columns={2}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              <Item.Group divided>
                { feed.map((data, i) =>
                  <Item key={i}>
                    <PostFeed {...data} />
                  </Item>
                )}
              </Item.Group>
              <Rail position='left'>
                <Sticky context={contextRef} offset={50}>
                  {/* TODO: Add a content */}
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

FeedPage.defaultProps = {
  feed: []
};

FeedPage.propTypes = {
};

export default FeedPage;
