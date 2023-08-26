import { FC } from 'react'
import { Icon } from 'assets/index'
import { TableSettngs } from 'components'
import { SalesTableWrapper, Header, Title } from './SalesTable.styled'
import { SalesTableProps } from './type'

const SalesTable: FC<SalesTableProps[]> = () => {
  return (
    <SalesTableWrapper>
      <Header>
        <Title>
          General Sales / Time
          <Icon.Info />
        </Title>
        <TableSettngs />
      </Header>
    </SalesTableWrapper>
  )
}

export default SalesTable
