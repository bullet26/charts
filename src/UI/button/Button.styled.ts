import styled from 'styled-components'

export const ButtonCustom = styled.button`
  padding: 20px 40px;
  font-size: 15px;
  background-color: ${(props) => props.theme.colors.secondColor};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  &&: hover {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.secondColor};
  }
`
