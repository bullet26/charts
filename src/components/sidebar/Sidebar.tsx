import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from 'assets'
import { IconWrapper } from 'UI/icon-wrapper'
import { SidebarWrapper, SidebarInnerWrapper } from './Sidebar.styled'

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const defultKey = pathname.split('/').at(2) || 'dashboard'
  const [activeTab, setActiveTab] = useState(defultKey)

  const handleClick = (id) => {
    !!id && setActiveTab(id)
  }

  return (
    <SidebarWrapper>
      <Icon.Logo />
      <SidebarInnerWrapper>
        <Link to="/dashboard">
          <IconWrapper
            id="dashboard"
            mode="circle"
            icon={<Icon.Dashboard />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
        <Link to="cards">
          <IconWrapper
            id="cards"
            mode="circle"
            icon={<Icon.Cards />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
        <Link to="product">
          <IconWrapper
            id="product"
            mode="circle"
            icon={<Icon.Product />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
        <Link to="wearTear">
          <IconWrapper
            id="wearTear"
            mode="circle"
            icon={<Icon.WearTear />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
        <Link to="games">
          <IconWrapper
            id="games"
            mode="circle"
            icon={<Icon.Games />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
        <Link to="settings">
          <IconWrapper
            id="settings"
            mode="circle"
            icon={<Icon.Settings />}
            onClick={handleClick}
            activeIcon={activeTab}
          />
        </Link>
      </SidebarInnerWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
