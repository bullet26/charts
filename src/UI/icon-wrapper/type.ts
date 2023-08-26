import { ReactNode } from 'react'

export interface IconWrapperProps {
  icon: ReactNode
  mode: 'square' | 'circle' | 'avatar'
  color?: string
}

export type WrapperProps = Omit<IconWrapperProps, 'icon'>
