import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Dimmer, Image, Loader } from 'semantic-ui-react';

class ProfilePage extends React.Component {

  componentWillMount() {
    /*
     * TODO: Fetch user
     */
  }

  render() {
    const { user } = this.props;

    return (
      <Grid container>
        <Grid.Row centered className='profile-header'>
          <Dimmer active={user}>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
          <Grid.Column width={3} textAlign='center'>
            <Image
              avatar
              circular
              size='medium'
              className='profile-image'
              src={user.avatar}
            />
            <Link to={`/profile/@${user.username}`}>
              <span className='profile-username'>
                @{user.username}
              </span>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ProfilePage.propTypes = {
  user: PropTypes.object
};

export default ProfilePage;
