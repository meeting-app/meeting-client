import React from 'react';
import PropTypes from 'prop-types'
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

const Navbar = ({ isAuthenticated }) => (
  <Menu inverted color='violet'>
    <Container>
      <Menu.Item as={Link} to='/'>
        <h2>Meeting</h2>
      </Menu.Item>
      {isAuthenticated &&
          <Menu.Item position='right'>
            <Dropdown trigger={avatar()}>
              <Dropdown.Menu>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
      }
      {!isAuthenticated &&
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

Navbar.defaultProps = {
  isAuthenticated: false
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Navbar;
