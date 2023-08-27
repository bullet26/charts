import { useField } from 'formik'
import { FC } from 'react'
import { Wrapper, Label, Input as InputField, Error } from './Input.styled'
import { MyInputProps } from './type'

const Input: FC<MyInputProps> = (props) => {
  const { name } = props
  const [field, meta] = useField(props)

  return (
    <Wrapper>
      <Label htmlFor={name} />
      <InputField {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </Wrapper>
  )
}

export default Input
