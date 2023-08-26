import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 18px;
  width: 100%;
`

export const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  flex: 1;
`

export const Username = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`
