import styled from 'styled-components'

export const CardWrapper = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  box-shadow: 0px 8px 28px 0px rgba(48, 48, 49, 0.1);
  border-radius: 8px;
  display: flex;
  column-gap: 22px;
  align-items: flex-start;
`

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 5px;
`

export const Number = styled.div`
  font-size: 44px;
  color: ${(props) => props.theme.colors.text};
`
export const Subtitle = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.textAdditionl};
`
