import { FC } from 'react'
import { CheckboxWrapper, Circle, Switch, Input, LabelText } from './ToggleButton.styled'
import { ToggleButtonProps } from './type'

const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { labelText } = props
  return (
    <CheckboxWrapper>
      <Input />
      <Switch>
        <Circle />
      </Switch>
      <LabelText>{labelText}</LabelText>
    </CheckboxWrapper>
  )
}

export default ToggleButton
