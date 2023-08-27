import { styled, css } from 'styled-components'

export const SalesTableWrapper = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`

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
