import PropTypes from "prop-types";
import css from "./FriendListItem.module.css"
import {Status, Item} from "./FriendListItem.styled"

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status className={isOnline ? css.isOnline_status : css.isOffline_status}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

