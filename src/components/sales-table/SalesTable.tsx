import { FC, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Icon } from 'assets'
import { TableSettngs, Table } from 'components'
import { SalesTableWrapper, Header, Title } from './SalesTable.styled'
import { SalesTableProps } from './type'
import { showColumnsInintialState } from './utils'

const SalesTable: FC<SalesTableProps> = (props) => {
  const [showColumns, setShowColumns] = useState(showColumnsInintialState)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    setShowAnimation(false)
    setTimeout(() => {
      setShowAnimation(true)
    }, 500)
  }, [showColumns])

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
      <CSSTransition in={showAnimation} timeout={500} classNames="fade" unmountOnExit>
        <Table data={props} showColumns={showColumns} />
      </CSSTransition>
    </SalesTableWrapper>
  )
}

export default SalesTable
