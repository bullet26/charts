import { styled } from 'styled-components'

export const SidebarWrapper = styled.div`
  display: flex;
  padding: 14px 18px 592px 18px;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  background-color: ${(props) => props.theme.colors.primaryColor};
`
export const SidebarInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
`
