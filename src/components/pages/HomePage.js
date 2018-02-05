import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

class HomePage extends React.Component {

  render() {
    return (
      <Container>
        <Header as='h2' textAlign='center'>
          <Header.Content>
            Meeting
          </Header.Content>
          <Header.Subheader>
            Your social network
          </Header.Subheader>
        </Header>
      </Container>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object
};

export default HomePage;
