import { styled, css, keyframes } from 'styled-components'

export const TableGrid = styled.div<{ count: number }>`
  ${(props) => {
    return css`
      grid-template-columns: repeat(${props.count}, minmax(50px, auto));
    `
  }}
  display: grid;
  column-gap: 60px;
  row-gap: 32px;
  grid-auto-flow: row;

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`

export const TableModelWrpper = styled.div`
  display: grid;
  grid-template-columns: 28px 113px;
  column-gap: 16px;
`

export const TableHeaderItem = styled.div<{ count: number }>`
  font-size: 11px;
  color: ${(props) => props.theme.colors.textAdditionl};
  display: flex;

  justify-content: ${(props) => (props.count > 9 ? 'flex-start' : 'center')};
  flex-start;
  align-items: center;
`

export const TableRowItem = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TableImg = styled.img`
  object-fit: 'cover'
  width: 28px;
  height: 40px;
`
const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const AnimatedfadeIn = styled.div`
  animation: ${fadeInAnimation} 0.4s linear;
`
