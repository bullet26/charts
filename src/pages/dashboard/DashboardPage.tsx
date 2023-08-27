import { FC } from 'react'
import { useGetChartsDataQuery } from 'store/api'
import { Sidebar, Header, StatisticCardList, SalesTable } from 'components'
import { Loader, ErrorMsg } from 'UI'
import { Layout, Wrapper, ChartWrapper } from './DashboardPage.styled'

const DashboardPage: FC = () => {
  const { data = [], isLoading, isSuccess, isError } = useGetChartsDataQuery('')
  console.log(data)

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMsg />}
      {isSuccess && (
        <Layout>
          <Sidebar />
          <Wrapper>
            <Header />
            <ChartWrapper>
              <StatisticCardList {...data.statistic} />
              <SalesTable {...data.general_sales_time[0]} />
            </ChartWrapper>
          </Wrapper>
        </Layout>
      )}
    </>
  )
}

export default DashboardPage
