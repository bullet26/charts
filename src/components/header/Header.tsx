import { FC } from 'react'
import { Icon } from 'assets'
import { IconWrapper } from 'UI/icon-wrapper'
import { HeaderWrapper, Title, Username } from './Header.styled'

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Title>Dashboard</Title>
      <IconWrapper mode="avatar" icon={<Icon.User />} />
      <Username>Username</Username>
    </HeaderWrapper>
  )
}

export default Header
