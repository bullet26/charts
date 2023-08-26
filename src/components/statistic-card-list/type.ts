import { ReactNode } from 'react'

export interface CardItemProps {
  icon: ReactNode
  bgcolor: string
  iconcolor: string
  count: number
  subtitle: string
}

export interface StatisticProps {
  compute_resources: number
  games: number
  iam_policies: number
  iam_roles: number
  iam_users: number
}
