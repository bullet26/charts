import { FC, Fragment } from 'react'
import { Checkbox } from 'UI'
import { ChartramProps } from '../type'
import { Wrapper, Title, Subtitle, Item } from './Legenda.styled'

const ChartLegenda: FC<ChartramProps> = (props) => {
  const { location, onClick, showGraphs } = props

  return (
    <Wrapper>
      {location.map(({ name, date }, i) => (
        <Fragment key={i}>
          <Checkbox
            mode="square"
            id={i}
            onChange={onClick}
            checked={showGraphs[i].status}
            $bgcolor={showGraphs[i].color}
          />
          <Item>
            <Title>Rating 94%</Title>
            <Subtitle>116 sales</Subtitle>
          </Item>
          <Item>
            <Title>{name}</Title>
            <Subtitle>{date}</Subtitle>
          </Item>
        </Fragment>
      ))}
    </Wrapper>
  )
}

export default ChartLegenda
