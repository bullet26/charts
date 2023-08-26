import { FC } from 'react'
import { CardItem } from 'components'
import { Icon } from 'assets'
import { StatisticProps } from './type'
import { CardListWrapper } from './StatisticCardList.styled'

const CardList: FC<StatisticProps> = (props) => {
  const { iam_users, iam_roles, iam_policies, compute_resources, games } = props

  return (
    <CardListWrapper>
      <CardItem
        icon={<Icon.User />}
        iconcolor="#3CDC86"
        bgcolor="rgba(66, 204, 88, 0.15);"
        count={iam_users}
        subtitle="IAM Users"
      />
      <CardItem
        icon={<Icon.SettingsGear />}
        iconcolor="#4998EE"
        bgcolor="rgba(73, 152, 238, 0.15);"
        count={iam_roles}
        subtitle="IAM Roles"
      />
      <CardItem
        icon={<Icon.Keyhole />}
        iconcolor="#F25D5D"
        bgcolor="rgba(242, 93, 93, 0.15);"
        count={iam_policies}
        subtitle="IAM Policies"
      />
      <CardItem
        icon={<Icon.Share />}
        iconcolor="#F4A732"
        bgcolor="rgba(244, 167, 50, 0.15);"
        count={compute_resources}
        subtitle="Compute Resources"
      />
      <CardItem
        icon={<Icon.Games />}
        iconcolor="#9B53F8"
        bgcolor="rgba(155, 83, 248, 0.15);"
        count={games}
        subtitle="Games"
      />
    </CardListWrapper>
  )
}

export default CardList
