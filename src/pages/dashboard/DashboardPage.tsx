import { FC } from 'react'
import { useGetChartsDataQuery } from 'store/api'
import { Header, StatisticCardList, SalesTable, Chart, Diagram } from 'components'
import { Loader, ErrorMsg } from 'UI'
import { Wrapper, DashboardWrapper, ChartWrapper } from './DashboardPage.styled'

const DashboardPage: FC = () => {
  const { data = [], isLoading, isSuccess, isError } = useGetChartsDataQuery('')

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMsg />}
      {isSuccess && (
        <Wrapper>
          <Header />
          <DashboardWrapper>
            <StatisticCardList {...data.statistic} />
            <ChartWrapper>
              <Chart />
              <Diagram />
            </ChartWrapper>
            <SalesTable {...data.general_sales_time[0]} />
          </DashboardWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default DashboardPage
