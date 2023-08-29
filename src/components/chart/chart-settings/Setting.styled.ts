import { styled } from 'styled-components'
import { SettingsChartStyled } from '../type'

export const SettngsTitle = styled.div<SettingsChartStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
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
    rotate: ${(props) => (props.$isActive ? '180deg' : '0deg')};
  }
`
export const SettngsSubtitle = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text}99;
`

export const SettngsTable = styled.div<{ type: string }>`
  z-index: 10;
  position: absolute;
  padding: ${(props) => (props.type === 'ch' ? '13px 24px 8px 24px' : '8px')};
  top: 26px;
  right: 0px;
  border-radius: ${(props) => (props.type === 'ch' ? '8px' : '4px')};
  width: ${(props) => (props.type === 'ch' ? '275px' : '235px')};
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.text};
  box-shadow:
    0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08),
    0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 12px 0px rgba(0, 0, 0, 0.4);
`
export const SettngsTableRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  margin-bottom: 23px;
  padding-left: 4px;
  &:last-child {
    margin-bottom: 0px;
  }
`

export const SettngsTableRowDiagram = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 13px 16px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverTable};
  }
`

export const Wrapper = styled.div`
  position: relative;
`
