import { FC } from 'react'
import { IconWrapper } from 'UI/icon-wrapper'
import { CardWrapper, TextWrapper, Number, Subtitle } from './StatisticCardList.styled'
import { CardItemProps } from './type'

const CardItem: FC<CardItemProps> = (props) => {
  const { icon, iconcolor, bgcolor, count, subtitle } = props
  return (
    <CardWrapper>
      <IconWrapper mode="square" icon={icon} iconcolor={iconcolor} bgcolor={bgcolor} />
      <TextWrapper>
        <Number>{count}</Number>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </CardWrapper>
  )
}

export default CardItem
