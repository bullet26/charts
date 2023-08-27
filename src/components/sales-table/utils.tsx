export const titles = {
  source: 'Source',
  model: 'Card model',
  card_number: 'Card number',
  card_name: 'Card name',
  type: 'Type',
  limited: 'Limited',
  operations: '№ Operations',
  date: 'Date of lost operations',
  rating: 'Rating',
  status: 'Status',
  price: 'Price',
}

const arrofObj = Object.keys(titles).map((item) => [item, true])

export const showColumnsInintialState = Object.fromEntries(arrofObj)

export const makeArray = (limit: number) => {
  const arr = []
  for (let i = 0; i < limit; i++) {
    arr.push(i)
  }
  return arr
}
