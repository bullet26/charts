import { FC } from 'react'
import { Wrapper } from './IconWrapper.styled'
import { IconWrapperProps } from './type'

const IconWrapper: FC<IconWrapperProps> = (props) => {
  const { icon, mode, bgcolor, iconcolor } = props

  return (
    <Wrapper mode={mode} bgcolor={bgcolor} iconcolor={iconcolor}>
      {icon}
    </Wrapper>
  )
}

export default IconWrapper
