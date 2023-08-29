import styled from 'styled-components'

export const ChartWrapper = styled.div`
  padding: 24px 32px 32px 32px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  position: relative;
`

export const GraphicWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  column-gap: 21px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`

export const DiagrmPieWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  column-gap: 38px;
`
