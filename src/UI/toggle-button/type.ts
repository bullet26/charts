export interface ToggleButtonProps {
  labelText?: string
  id: string
  checked?: boolean
  onClick: (id: string) => void
}
