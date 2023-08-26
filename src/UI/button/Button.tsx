import { FC } from 'react'
import { ButtonCustom } from './Button.styled'
import { ButtonProps } from './type'

const Button: FC<ButtonProps> = (props) => {
  const { children } = props
  return <ButtonCustom>{children}</ButtonCustom>
}

export default Button
