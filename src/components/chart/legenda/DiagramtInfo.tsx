import { FC } from 'react'
import { TitleInfo, Subtitle, Title, DiagramtInfoWrapper } from './Legenda.styled'

const DiagramtInfo: FC = () => {
  return (
    <DiagramtInfoWrapper>
      <Subtitle>EXCESSIVE</Subtitle>
      <TitleInfo>85%</TitleInfo>
      <Title>+40 418 in the last</Title> <Title>30 days</Title>
    </DiagramtInfoWrapper>
  )
}

export default DiagramtInfo
