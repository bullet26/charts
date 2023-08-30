import { FC } from 'react'
import { Wrapper } from './IconWrapper.styled'
import { IconWrapperProps } from './type'

const IconWrapper: FC<IconWrapperProps> = (props) => {
  const { icon, mode, bgcolor, iconcolor, id, onClick, activeIcon } = props

  const handleClick = onClick || (() => {})

  return (
    <Wrapper
      mode={mode}
      bgcolor={bgcolor}
      iconcolor={iconcolor}
      $active={activeIcon === id}
      onClick={() => handleClick(id || '')}>
      {icon}
    </Wrapper>
  )
}

export default IconWrapper
