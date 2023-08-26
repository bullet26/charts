import { FC } from 'react'
import { Icon } from 'assets'
import { IconWrapper } from 'UI/icon-wrapper'
import { SidebarWrapper, SidebarInnerWrapper } from './Sidebar.styled'

const Sidebar: FC = () => {
  return (
    <SidebarWrapper>
      <Icon.Logo />
      <SidebarInnerWrapper>
        <IconWrapper mode="circle" icon={<Icon.Dashboard />} />
        <IconWrapper mode="circle" icon={<Icon.Cards />} />
        <IconWrapper mode="circle" icon={<Icon.Product />} />
        <IconWrapper mode="circle" icon={<Icon.WearTear />} />
        <IconWrapper mode="circle" icon={<Icon.Games />} />
        <IconWrapper mode="circle" icon={<Icon.Settings />} />
      </SidebarInnerWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
