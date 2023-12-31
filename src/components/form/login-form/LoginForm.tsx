import { FC, useEffect } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { useLoginMutation } from 'store/api'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from 'UI'
import { useAppSelector } from 'utils/redux.hooks'
import { UserInfoLogin } from '../type'
import { initialValues, validationSchema } from './utils'
import { Wrapper, Title, Subtitle, Text, FormWrapper, InputWrapper, LinkText } from '../Form.styled'

const LoginForm: FC = () => {
  const [login, { isError }] = useLoginMutation()

  const isAuthUser = useAppSelector((state) => state.user.isAuth)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthUser) {
      navigate('/dashboard')
    }
  }, [isAuthUser, navigate])

  const handleSubmit = (values: UserInfoLogin, { resetForm }: FormikHelpers<UserInfoLogin>) => {
    login(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {() => (
        <Wrapper>
          <Text>
            <Title>Welcome</Title>
            <Subtitle>Welcome! Please enter your details</Subtitle>
          </Text>
          <FormWrapper>
            <InputWrapper>
              <Input label="Email" id="email" name="email" type="email" />
              <Input label="Password" id="password" name="password" type="password" />
            </InputWrapper>
            <Button type="submit">Log in</Button>
          </FormWrapper>
          <Subtitle>
            Or
            <LinkText to="/">Sign up</LinkText>
          </Subtitle>
          {isError && <Subtitle>Something went wrong</Subtitle>}
        </Wrapper>
      )}
    </Formik>
  )
}

export default LoginForm
