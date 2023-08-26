import { FC } from 'react'
import { Wrapper } from './IconWrapper.styled'
import { IconWrapperProps } from './type'

const IconWrapper: FC<IconWrapperProps> = (props) => {
  const { icon, mode, color } = props

  return (
    <Wrapper mode={mode} color={color}>
      {icon}
    </Wrapper>
  )
}

export default IconWrapper
