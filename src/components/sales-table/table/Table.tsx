/* eslint-disable react/destructuring-assignment */
import { FC, useState, useEffect } from 'react'
import { tableDefaultImg, Icon } from 'assets'
import { makeArray } from 'utils'
import {
  TableHeaderItem,
  TableRowItem,
  TableGrid,
  TableModelWrpper,
  TableImg,
} from './Table.styled'
import { SalesTableProps, TableProps } from '../type'
import { titles } from '../utils'

const Table: FC<TableProps> = (props) => {
  const { data, showColumns } = props
  const [count, setCount] = useState(11)

  useEffect(() => {
    setCount(Object.values(showColumns).filter((item: boolean) => item === true).length)
  }, [showColumns])

  const rows = (i: number) =>
    Object.keys(titles).map((key) => {
      if (!showColumns[key]) {
        return null
      }
      const value = key in data ? data[key as keyof SalesTableProps] : 'unknown'

      if (key === 'model' && typeof value === 'object') {
        return (
          <TableModelWrpper key={key + 2 + i}>
            <TableImg key={key + i} src={value.image || tableDefaultImg} />
            <TableRowItem key={key + i + 10}>{value.name}</TableRowItem>
          </TableModelWrpper>
        )
      }
      if (key === 'option') {
        return (
          <TableRowItem key={i + i}>
            <Icon.ActionMenu />
          </TableRowItem>
        )
      }
      if (typeof value !== 'object') {
        return <TableRowItem key={key + i + 100}>{value}</TableRowItem>
      }

      return null
    })

  return (
    <TableGrid count={count}>
      {Object.entries(titles).map(
        ([key, value]) =>
          showColumns[key] && (
            <TableHeaderItem key={key} id={key} count={count}>
              {value}
            </TableHeaderItem>
          ),
      )}
      {makeArray(5).map((i) => rows(i))}
    </TableGrid>
  )
}

export default Table
