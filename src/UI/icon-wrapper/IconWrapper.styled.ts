import styled, { css } from 'styled-components'
import { WrapperProps } from './type'

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  ${(props) => {
    switch (props.mode) {
      case 'circle':
        return css`
          border-radius: 50%;
          background-color: ${props.theme.colors.iconBgColor};
          &&:hover {
            background-color: ${props.theme.colors.secondColor};
            & > svg rect {
              stroke: white;
            }
          }
        `
      case 'avatar':
        return css`
          border-radius: 50%;
          width: 36px;
          height: 36px;
          background-color: ${props.theme.colors.primaryColor};
          &&:hover {
            background-color: ${props.theme.colors.secondColor};
          }
          & > svg rect {
            stroke: white;
          }
        `
      default:
        return css`
          border-radius: 8px;
          background-color: ${props.color}26; // rrggbbaa

          & > svg rect {
            stroke: ${props.color};
          }
        `
    }
  }}
`
