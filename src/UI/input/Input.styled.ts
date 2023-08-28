import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Label = styled.label``

export const Input = styled.input`
  font-size: 15px;
  height: 44px;
  padding: 10px 16px;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #3d4250;
  color: ${(props) => props.theme.colors.inputColor};
  background-color: ${(props) => props.theme.colors.primaryColor};
`

export const Error = styled.div`
  font-size: 15px;
  margin-top: 5px;
  color: tomato;
`
