import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from 'components'
import { Layout } from './MainPage.styled'

const MainPage: FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Outlet />
    </Layout>
  )
}

export default MainPage
