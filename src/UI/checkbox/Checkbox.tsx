import { FC } from 'react'
import { CustomCheck, Input, CheckboxLabel, CustomTick } from './Checkbox.styled'
import { CheckboxProps } from './types'

const Checkbox: FC<CheckboxProps> = (props) => {
  const { mode, id, onChange, checked, $bgcolor } = props

  return (
    <CheckboxLabel>
      <Input onChange={() => onChange(id)} checked={checked} />
      <CustomCheck
        mode={mode}
        id={id}
        $bgcolor={$bgcolor}
        onChange={() => onChange(id)}
        checked={checked}>
        <CustomTick />
      </CustomCheck>
    </CheckboxLabel>
  )
}

export default Checkbox
