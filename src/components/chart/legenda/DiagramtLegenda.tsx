import { FC, Fragment } from 'react'
import { legenda, bgcolor } from '../utils'
import { DiagramWrapper, Subtitle, Circle } from './Legenda.styled'

const DiagramtLegenda: FC = () => {
  return (
    <DiagramWrapper>
      {legenda.map((item, i) => (
        <Fragment key={i}>
          <Circle $color={bgcolor[i]} />
          <Subtitle>{item}</Subtitle>
        </Fragment>
      ))}
    </DiagramWrapper>
  )
}

export default DiagramtLegenda
