import React from 'react';
import PropTypes from 'prop-types';
import {
  Input
} from 'semantic-ui-react';

class SearchForm extends React.Component {

  // TODO: Implement submit handler

  render() {
    return (
        <Input className='icon' icon='search' placeholder='Search...' />
    );
  }
}

SearchForm.propTypes = {
};

export default SearchForm;
