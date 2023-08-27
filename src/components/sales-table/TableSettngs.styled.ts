import { styled } from 'styled-components'
import { SettingsTableStyled } from './type'

export const SettngsTitle = styled.div<SettingsTableStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.tableSettings : props.theme.colors.text};
  &: hover {
    color: ${(props) => props.theme.colors.tableSettings};
  }
  & > svg {
    stroke: currentColor;
    fill: currentColor;
    &:last-child {
      rotate: ${(props) => (props.$isActive ? '180deg' : '0deg')};
    }
  }
`

export const SettngsTable = styled.div`
  display: grid;
  position: absolute;
  top: 26px;
  right: 0px;
  grid-template-columns: 194px 28px;
  column-gap: 24px;
  row-gap: 23px;
  padding: 14px 16px 10px 24px;
  height: 270px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.primaryColor};
  &::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 4px;
  }

  /* button */
  &::-webkit-scrollbar-thumb {
    background-color: #a9a6ae;
    border-radius: 4px;
    height: 120px;
  }
`

export const SettngsTableRow = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`

export const SettngsTableWrapper = styled.div`
  position: relative;
`
