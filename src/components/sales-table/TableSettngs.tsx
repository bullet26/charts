import { FC } from 'react'
import { Icon } from 'assets/index'
import { SettngsTitle } from './SalesTable.styled'

const TableSettngs: FC = () => {
  return (
    <SettngsTitle>
      <Icon.SettingsGear />
      Table settings
      <Icon.ArrowDown />
    </SettngsTitle>
  )
}

export default TableSettngs
