import { FC } from 'react'
import { CheckboxWrapper, Circle, Switch, Input, LabelText } from './ToggleButton.styled'
import { ToggleButtonProps } from './type'

const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { labelText, checked, onClick, id } = props

  return (
    <CheckboxWrapper>
      <Input checked={checked} onChange={() => onClick(id)} />
      <Switch>
        <Circle />
      </Switch>
      {!!labelText && <LabelText>{labelText}</LabelText>}
    </CheckboxWrapper>
  )
}

export default ToggleButton
