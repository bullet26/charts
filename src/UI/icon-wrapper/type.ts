import { ReactNode } from 'react'

export interface IconWrapperProps {
  $active?: boolean
  id?: string
  activeIcon?: string
  icon: ReactNode
  mode: 'square' | 'circle' | 'avatar'
  bgcolor?: string
  iconcolor?: string
  onClick?: (id: string) => void
}

export type WrapperProps = Omit<IconWrapperProps, 'icon'>
