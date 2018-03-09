import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Image,
  Menu
} from 'semantic-ui-react';

const avatar = () => (
  <Image avatar src='/assets/avatar.jpg'/>
);

const Navbar = ({ isAuthenticate }) => (
  <Menu inverted color='violet'>
    <Container>
      <Menu.Item as={Link} to='/'>
        <h2>Meeting</h2>
      </Menu.Item>
      {isAuthenticate &&
          <Menu.Item position='right'>
            <Dropdown trigger={avatar()}>
              <Dropdown.Menu>
                <Dropdown.Item>Logout</Dropdown.Item>
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
  isAuthenticate: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  };
}

export default connect(mapStateToProps)(Navbar);
