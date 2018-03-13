import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Dimmer, Image, Loader } from 'semantic-ui-react';

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

  render() {
    const { user } = this.state;

    console.log('user', user);

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
      </Grid>
    );
  }
}

export default ProfilePage;
