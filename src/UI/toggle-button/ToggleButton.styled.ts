import styled from 'styled-components'

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`

export const Switch = styled.div`
  width: 28px;
  height: 19px;
  border-radius: 88px;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondColor};
  padding: 0 3px;
`

export const Circle = styled.div`
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 40px;
  position: absolute;
  top: 3px;
  left: 2px;
  transition: left 0.25s linear;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked ~ ${Switch} ${Circle} {
    left: 18px;
  }
`
export const LabelText = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 14;
`
