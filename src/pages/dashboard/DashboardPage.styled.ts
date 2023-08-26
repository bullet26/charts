import { styled } from 'styled-components'

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bgColor};
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 32px 28px 48px;
`

export const ChartWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  disply: flex;
  row-gap: 16px;
`
