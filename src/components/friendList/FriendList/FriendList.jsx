import {List} from "./FriendList.styled";
import PropTypes from "prop-types";
import {FriendListItem} from "../FriendListItem/FriendListItem";

export function FriendList({friends}) {
  return (
    <List>
      {friends.map(({id, isOnline, avatar, name}) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </List>
  );
}

FriendList.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
