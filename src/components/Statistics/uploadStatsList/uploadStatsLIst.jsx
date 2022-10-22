import {UploadStats} from "../uploadStats/uploadStats";
import {Wrapper, Title, List, Item,} from "./uploadStatsList.styled"

export const Statistics = ({stats, title}) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
            <Item key={stat.id}>
              <UploadStats
                label={stat.label}
                percentage={stat.percentage}/>
            </Item>
          )
        )}
      </List>
    </Wrapper>
  )
}


