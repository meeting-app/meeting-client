import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Image,
  Menu
} from 'semantic-ui-react';

import SearchForm from '../forms/SearchForm';

const avatar = () => (
  <Image avatar src='/assets/avatar.jpg'/>
);

// TODO: Implement search input
const Navbar = ({ isAuthenticate, username }) => (
  <Menu inverted color='violet'>
    <Container>
      <Menu.Item as={Link} to='/'>
        <h2>Meeting</h2>
      </Menu.Item>
      {isAuthenticate &&
          <Fragment>
            <Menu.Item as={Link} to='/feed'>
              Feed
            </Menu.Item>
            <Menu.Item as={Link} to='/post'>
              Post
            </Menu.Item>
            <Menu.Item as={Link} to={`/profile/@${username}`}>
              Profile
            </Menu.Item>
          </Fragment>
      }
      <Menu.Item position='right'>
        <SearchForm />
      </Menu.Item>
      {isAuthenticate &&
          <Menu.Item position='right'>
            <Dropdown trigger={avatar()}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to='/logout'
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
      }
      {!isAuthenticate &&
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              to='/login'
              name='Log In'
            />
            <Menu.Item
              as={Link}
              to='/signup'
              name='Sign Up'
            />
          </Menu.Menu>
      }
    </Container>
  </Menu>
);

Navbar.propTypes = {
  isAuthenticate: PropTypes.bool,
  username: PropTypes.string
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token,
    username: state.user.username
  };
}

export default connect(mapStateToProps)(Navbar);
