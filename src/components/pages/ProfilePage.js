import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Dimmer,
  Grid,
  Image,
  Item,
  Loader,
  Segment,
} from 'semantic-ui-react';

import UserFeed from '../feed/UserFeed';

// API ...
import api from '../../api';

// TODO: change default avatar
const defaultAvatar = '/assets/avatar.jpg';

class ProfilePage extends React.Component {

  state = {};

  componentDidMount() {
    // TODO: use redux?
    api
      .user
      .fetchUser(this.props.match.params.username)
      .then(user => this.setState({ user }));
  }

  componentDidUpdate(props, nextState) {
    if (this.props.isAuthenticate && this.state.user && !this.state.posts) {
      api
        .user
        .fetchPostFromUser(this.state.user.username)
        .then(posts => this.setState({ ...this.state, posts }));
    }
  }

  render() {
    const { user, posts } = this.state;

    return (
      <Grid container>
        <Grid.Row centered className='profile-header'>
          <Dimmer active={!user}>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
          {user &&
              <Grid.Column width={3} textAlign='center'>
                <Image
                  avatar
                  circular
                  size='medium'
                  className='profile-image'
                  src={defaultAvatar}
                />
                <Link to={`/profile/@${user.username}`}>
                  <span className='profile-username'>
                    @{user.name}
                  </span>
                </Link>
              </Grid.Column>
          }
        </Grid.Row>
        {posts &&
            <Grid.Row centered>
              <Segment>
                <Item.Group divided>
                  { posts.map((data, i) =>
                    <Item key={i}>
                      <UserFeed {...data} />
                    </Item>
                  )}
                </Item.Group>
              </Segment>
            </Grid.Row>
        }
      </Grid>
    );
  }
}

ProfilePage.propTypes = {
  isAuthenticate: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  };
}

export default connect(mapStateToProps)(ProfilePage);
