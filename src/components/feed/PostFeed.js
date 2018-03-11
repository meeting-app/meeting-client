import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Feed } from 'semantic-ui-react';

const defaultAvatar = '/assets/avatar.jpg';

const PostFeed = ({ name, username, text, date }) => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={defaultAvatar} />
      <Feed.Content>
        <Feed.Date>{date}</Feed.Date>
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

PostFeed.propTypes = {
};

export default PostFeed;
