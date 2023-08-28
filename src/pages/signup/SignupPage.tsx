import { FC } from 'react'
import { SignupForm } from 'components'
import { SignupPageWrapper } from './SignupPage.styled'

const SignupPage: FC = () => {
  return (
    <SignupPageWrapper>
      <SignupForm />
    </SignupPageWrapper>
  )
}

export default SignupPage
