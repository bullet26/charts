import { FC } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { useRegistrationMutation } from 'store/api'
import { Input, Button } from 'UI'
import { UserInfoSignUp } from '../type'
import { initialValues, validationSchema } from './utils'
import { Wrapper, Title, Subtitle, Text, FormWrapper, InputWrapper, LinkText } from '../Form.styled'

const SignupForm: FC = () => {
  const [registration, { isSuccess, isError }] = useRegistrationMutation()

  const handleSubmit = (values: UserInfoSignUp, { resetForm }: FormikHelpers<UserInfoSignUp>) => {
    registration(values)
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
              <Input label="Name" id="name" name="name" type="text" />
              <Input label="Email" id="email" name="email" type="email" />
              <Input label="Password" id="password" name="password" type="password" />
            </InputWrapper>
            <Button type="submit">Create account</Button>
          </FormWrapper>
          <Subtitle>
            Or
            <LinkText to="/login">Log in</LinkText>
          </Subtitle>
          {isSuccess && <Subtitle>User succesfully created</Subtitle>}
          {isError && <Subtitle>Something went wrong</Subtitle>}
        </Wrapper>
      )}
    </Formik>
  )
}

export default SignupForm
