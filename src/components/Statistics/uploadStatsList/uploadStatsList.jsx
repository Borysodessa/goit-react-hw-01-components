import {UploadStats} from "../uploadStats/uploadStats";
import {Wrapper, Title, List, Item,} from "./uploadStatsList.styled"

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({stats, title}) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
            <Item key={stat.id} style={{backgroundColor: randomHexColor()}}>
              <UploadStats
                label={stat.label}
                percentage={stat.percentage}
              />
            </Item>
          )
        )}
      </List>
    </Wrapper>
  )
}


