import { styled } from 'styled-components'
import { Form } from 'formik'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 48px;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  font-size: 48px;
  line-height: 70px;
  color: ${(props) => props.theme.colors.text};
`
export const Subtitle = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.formSubtitleColor};
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: stretch;
`

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  align-items: stretch;
  width: 100%;
`
export const LinkText = styled(Link)`
  margin-left: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.linkColor};
`
