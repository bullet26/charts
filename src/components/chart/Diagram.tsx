import { FC } from 'react'
import { useGetChartsDataQuery } from 'store/api'
import { DiagramSetting, DiagramtLegenda, DiagramPie, DiagramtInfo } from 'components'
import { Loader, ErrorMsg } from 'UI'
import { ChartWrapper, Title, Header, DiagrmPieWrapper } from './Chart.styled'

const Diagram: FC = () => {
  const { data = [], isLoading, isSuccess, isError } = useGetChartsDataQuery('')

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMsg />}
      {isSuccess && (
        <ChartWrapper>
          <Header>
            <Title>Game Stats</Title>
            <DiagramSetting location={data.users} />
          </Header>
          <DiagrmPieWrapper>
            <DiagramPie
              chartData={[
                { name: 'roles', value: data.statistic?.iam_roles },
                { name: 'users', value: data.statistic?.iam_users },
                { name: 'policies', value: data.statistic?.iam_policies },
              ]}
            />
            <DiagramtLegenda />
          </DiagrmPieWrapper>
          <DiagramtInfo />
        </ChartWrapper>
      )}
    </>
  )
}

export default Diagram
