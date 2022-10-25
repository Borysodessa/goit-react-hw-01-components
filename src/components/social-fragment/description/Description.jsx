import PropTypes from 'prop-types';

import {Avatar, Username, Tag, Location,  Wrap} from "./Description.styled";

export const Description = ({username, avatar, tag, location}) => {
  return (
    <Wrap>
      <Avatar src={avatar} alt="User avatar" className="avatar"/>
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Wrap>
  );
};

Description.propTypes = {
avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
