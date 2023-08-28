import { FC } from 'react'
import { ButtonCustom } from './Button.styled'
import { ButtonProps } from './type'

const Button: FC<ButtonProps> = (props) => {
  const { children, type } = props
  return <ButtonCustom type={type}>{children}</ButtonCustom>
}

export default Button
