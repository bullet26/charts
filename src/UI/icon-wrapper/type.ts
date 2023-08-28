import { ReactNode } from 'react'

interface IconWrapperPropsWithoutOnClick {
  $active?: boolean
  id?: string
  activeIcon?: string
  icon: ReactNode
  mode: 'square' | 'circle' | 'avatar'
  bgcolor?: string
  iconcolor?: string
}

type IconWrapperPropsWithRequiredClick = IconWrapperPropsWithoutOnClick & {
  mode: 'circle'
  onClick: (id: string) => void
}

export type IconWrapperProps =
  | (Exclude<IconWrapperPropsWithoutOnClick, { mode: 'square' }> & { mode: 'circle' | 'avatar' })
  | IconWrapperPropsWithRequiredClick

export type WrapperProps = Omit<IconWrapperProps, 'icon'>
