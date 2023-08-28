import { Route, Routes } from 'react-router-dom'
import { DashboardPage, LoginPage, SignupPage, OrdinaryPage, MainPage } from 'pages'
import { useAppSelector } from 'utils/redux.hooks'

export const Router = () => {
  const isAuthUser = useAppSelector((state) => state.user.isAuth)

  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      {isAuthUser && (
        <Route path="/dashboard" element={<MainPage />}>
          <Route index element={<DashboardPage />} />
          <Route path="cards" element={<OrdinaryPage />} />
          <Route path="product" element={<OrdinaryPage />} />
          <Route path="wearTear" element={<OrdinaryPage />} />
          <Route path="games" element={<OrdinaryPage />} />
          <Route path="settings" element={<OrdinaryPage />} />
        </Route>
      )}

      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default Router
