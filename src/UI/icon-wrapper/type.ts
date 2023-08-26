import { ReactNode } from 'react'

export interface IconWrapperProps {
  icon: ReactNode
  mode: 'square' | 'circle' | 'avatar'
  bgcolor?: string
  iconcolor?: string
}

export type WrapperProps = Omit<IconWrapperProps, 'icon'>
