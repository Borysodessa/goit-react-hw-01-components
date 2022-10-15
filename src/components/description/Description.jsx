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
