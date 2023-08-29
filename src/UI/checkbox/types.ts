export interface CheckboxProps {
  mode: 'square' | 'circle' | 'fill-square'
  id: number
  checked: boolean
  onChange: (id: number) => void
  $bgcolor?: string
}
