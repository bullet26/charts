import { FC } from 'react'
import { CustomCheck, Input, CheckboxLabel, CustomTick } from './Checkbox.styled'
import { CheckboxProps } from './types'

const Checkbox: FC<CheckboxProps> = (props) => {
  const { mode } = props

  return (
    <CheckboxLabel>
      <Input />
      <CustomCheck mode={mode}>
        <CustomTick />
      </CustomCheck>
    </CheckboxLabel>
  )
}

export default Checkbox
