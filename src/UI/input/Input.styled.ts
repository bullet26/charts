import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 64px;
  padding: 10px 16px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #3d4250;
`

export const Label = styled.label``

export const Input = styled.input`
  font-size: 15px;
  color: ${(props) => props.theme.colors.inputColor};
`

export const Error = styled.div`
  font-size: 15px;
  color: tomato;
`
