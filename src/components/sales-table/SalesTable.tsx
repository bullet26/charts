import { FC, useState } from 'react'
import { Icon } from 'assets/index'
import { TableSettngs, Table } from 'components'
import { SalesTableWrapper, Header, Title } from './SalesTable.styled'
import { SalesTableProps } from './type'
import { showColumnsInintialState } from './utils'

const SalesTable: FC<SalesTableProps> = (props) => {
  const [showColumns, setShowColumns] = useState(showColumnsInintialState)

  const handleShowColumns = (key: string) => {
    setShowColumns((prevstate: { [x: string]: boolean }) => {
      if (Object.hasOwn(prevstate, key)) {
        return { ...prevstate, [key]: !prevstate[key] }
      }
      return prevstate
    })
  }

  return (
    <SalesTableWrapper>
      <Header>
        <Title>
          General Sales / Time
          <Icon.Info />
        </Title>
        <TableSettngs showColumns={showColumns} handleShowColumns={handleShowColumns} />
      </Header>
      <Table data={props} showColumns={showColumns} />
    </SalesTableWrapper>
  )
}

export default SalesTable
