import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Feed } from 'semantic-ui-react';

const UserFeed = ({ name, username, text, created_at }) => (
  // TODO: Make better UI
  <Feed>
    <Feed.Event>
      <Feed.Content>
        <Feed.Date>{created_at}</Feed.Date>
        <Feed.Summary>
          <Link to={`/profile/@${username}`}>{username}</Link> created a post
        </Feed.Summary>
        <Feed.Extra text>
          {text}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

UserFeed.propTypes = {
};

export default UserFeed;
