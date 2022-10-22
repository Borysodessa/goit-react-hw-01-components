

import {Background} from "./Profile.styled";
import {Container} from "./Profile.styled";
import {Stats} from "../stats/Stats";
import {Description} from "../description/Description";

export const Profile = ({profile: {avatar, username, tag, location, stats: {followers, views, likes}}}) => {
  return (
    <Background>
      <Container>
        <Description username={username} avatar={avatar} tag={tag} location={location}/>
        <Stats followers={followers} views={views} likes={likes}/>
      </Container>
    </Background>
  );
};



