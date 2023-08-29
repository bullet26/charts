import styled, { css } from 'styled-components'
import { CheckboxProps } from './types'

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`

export const CustomTick = styled.span`
  width: 15px;
  height: 16px;
  background-color: transparent;
  position: relative;
`

export const CustomCheck = styled.div<CheckboxProps>`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.mode) {
      case 'square':
        return css`
          border: 2px solid ${props.theme.colors.border};
          border-radius: 2px;
          ${Input}:checked + && {
            border: 2px solid
              ${props.$bgcolor
                ? props.theme.colors[props.$bgcolor]
                : props.theme.colors.secondColor};
            & > ${CustomTick} {
              background-color: ${props.$bgcolor
                ? props.theme.colors[props.$bgcolor]
                : props.theme.colors.secondColor};
            }
          }
        `

      case 'circle':
        return css`
          border: 2px solid ${props.theme.colors.border};
          border-radius: 50%;
          ${Input}:checked + && {
            border: 2px solid ${props.theme.colors.secondColor};
            & > ${CustomTick} {
              border-radius: 50%;
              background-color: ${props.theme.colors.secondColor};
            }
          }
        `
      default:
        return css`
          border: 2px solid ${props.theme.colors.border};
          border-radius: 2px;
          ${Input}:checked + && {
            border: 2px solid ${props.theme.colors.secondColor};
            background-color: ${props.theme.colors.secondColor};
            & > ${CustomTick} {
              background-color: ${props.theme.colors.secondColor};
              &:after,
              &:before {
                content: '';
                position: absolute;
                top: 0px;
                left: 8px;
                width: 2px;
                height: 15px;
                transform: rotate(28deg);
                background-color: ${props.theme.colors.primaryColor};
              }
              &:before {
                transform: rotate(-28deg);
                height: 10px;
                top: 4px;
                left: 3px;
              }
            }
          }
        `
    }
  }};
`
