import { FC, Fragment, useState } from 'react'
import { Icon } from 'assets/index'
import { ToggleButton } from 'UI'
import {
  SettngsTitle,
  SettngsTable,
  SettngsTableRow,
  SettngsTableWrapper,
} from './TableSettngs.styled'
import { titles } from './utils'
import { SettngsTableProps } from './type'

const TableSettngs: FC<SettngsTableProps> = (props) => {
  const { showColumns, handleShowColumns } = props

  const [showSettings, setShowSettings] = useState(false)

  const handleClick = () => {
    setShowSettings((prevState) => !prevState)
  }

  return (
    <SettngsTableWrapper>
      <SettngsTitle onClick={handleClick} $isActive={showSettings}>
        <Icon.SettingsGear />
        Table settings
        <Icon.ArrowDown />
      </SettngsTitle>
      {showSettings && (
        <SettngsTable>
          {Object.entries(titles).map(([key, value]) => (
            <Fragment key={key + value[2]}>
              <SettngsTableRow key={key + value[1]}>{value}</SettngsTableRow>
              <ToggleButton
                key={key}
                id={key}
                onClick={handleShowColumns}
                checked={showColumns[key]}
              />
            </Fragment>
          ))}
        </SettngsTable>
      )}
    </SettngsTableWrapper>
  )
}

export default TableSettngs
