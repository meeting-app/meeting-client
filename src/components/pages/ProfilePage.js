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
} from 'semantic-ui-react';

import UserFeed from '../feed/UserFeed';

// API ...
import api from '../../api';

// TODO: change default avatar
const defaultAvatar = '/assets/avatar.jpg';

class ProfilePage extends React.Component {

  state = {
    user: {},
    posts: []
  };

  componentDidMount() {
    api
      .user
      .fetchUser(this.props.match.params.username)
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  componentWillReceiveProps(props) {
    const { username } = props.match.params;
    if (username && username !== this.state.user.username) {
      const { user } = props;
      this.setState({
        user: {
          name: user.username,
          username: user.username
        },
        posts: []
      });
    }
  }

  componentDidUpdate(props, nextState) {
    if (this.props.isAuthenticate && this.state.posts.length === 0) {
      api
        .user
        .fetchPostFromUser(this.state.user.username)
        .then(posts => this.setState({ ...this.state, posts }));
    }
  }

  render() {
    const { user, posts, error } = this.state;

    if (error) {
      console.log(error);
      return (
        <Grid container>
          <Grid.Row centered>
            <h2>Profile not found</h2>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <Grid container>
        <Grid.Row centered className='profile-header'>
          <Dimmer active={Object.keys(user).length === 0}>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
          {user && (
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
          )
          }
        </Grid.Row>
        {posts &&
            <Grid.Row centered>
              <Grid.Column width={8}>
                <Item.Group divided>
                  { posts.map((data, i) =>
                    <Item key={i}>
                      <UserFeed {...data} />
                    </Item>
                  )}
                </Item.Group>
              </Grid.Column>
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
    isAuthenticate: !!state.user.token,
    user: state.user,
  };
}

export default connect(mapStateToProps)(ProfilePage);
