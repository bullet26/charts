import { styled } from 'styled-components'

export const SalesTableWrapper = styled.div`
  padding: 24px 32px;
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
export const SettngsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.tableSettings};
  & > svg {
    stroke: currentColor;
    fill: currentColor;
  }
`
