
import PropTypes from 'prop-types'

import {StatsItem, StatsList, Label, Quantity} from "./Stats.styled";
import {Description} from "../description/Description";

export const Stats = ({followers, views, likes,}) => {
  return (
    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};

Description.propTypes = {
  Followers: PropTypes.string,
  views: PropTypes.number,
  likes: PropTypes.number
}
