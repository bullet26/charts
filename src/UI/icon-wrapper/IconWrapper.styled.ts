import styled, { css } from 'styled-components'
import { WrapperProps } from './type'

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  ${(props) => {
    switch (props.mode) {
      case 'circle':
        return css`
          cursor: pointer;
          border-radius: 50%;
          background-color: ${props.theme.colors.iconBgColor};
          & > svg {
            stroke: #7d869e;
            fill: #7d869e;
          }
          &&:hover {
            background-color: ${props.theme.colors.secondColor};
            & > svg {
              stroke: #fff;
              fill: #fff;
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
          & > svg {
            stroke: #fff;
            fill: #fff;
          }
        `
      default:
        return css`
          border-radius: 8px;
          background-color: ${props.bgcolor};

          & > svg {
            stroke: ${props.iconcolor};
            fill: ${props.iconcolor};
          }
        `
    }
  }}
`
