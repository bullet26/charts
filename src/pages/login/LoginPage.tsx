import { FC } from 'react'
import { LoginForm } from 'components'
import { LoginPageWrapper } from './LoginPage.styled'

const LoginPage: FC = () => {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  )
}

export default LoginPage
