import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

const ErrorPage = () => (
  <Container>
    <Header as='h2' textAlign='center'>
      <Header.Content>
        Page not found
      </Header.Content>
    </Header>
  </Container>
);

ErrorPage.propTypes = {
};

export default ErrorPage;
