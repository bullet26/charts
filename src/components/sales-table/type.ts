export interface SalesTableProps {
  card_name: string
  card_number: string
  date: string
  limited: number
  operations: number
  price: string
  rating: number
  status: string
  type: string
  model: {
    image: null | string
    name: string
  }
}

export interface SettingsTableStyled {
  $isActive: boolean
}

export interface SettngsTableProps {
  showColumns: { [x: string]: boolean }
  handleShowColumns: (key: string) => void
}

export interface TableProps {
  data: SalesTableProps
  showColumns: { [x: string]: boolean }
}
