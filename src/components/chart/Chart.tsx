import { FC, useState } from 'react'
import { useGetChartsDataQuery } from 'store/api'
import { makeArray } from 'utils'
import { ChartSetting, ChartLegenda, GraphicChartArea } from 'components'
import { Loader, ErrorMsg } from 'UI'
import { ChartWrapper, Title, Header, GraphicWrapper } from './Chart.styled'
import { bgcolor } from './utils'

const Chart: FC = () => {
  const { data = [], isLoading, isSuccess, isError } = useGetChartsDataQuery('')
  const [showGraphs, setShowGraphs] = useState(
    makeArray(data.users.length).map((item) => ({ id: item, status: true, color: bgcolor[item] })),
  )

  const handleonChanged = (id: string | number) => {
    setShowGraphs((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status }
        }
        return item
      }),
    )
  }

  console.log(data)

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMsg />}
      {isSuccess && (
        <ChartWrapper>
          <Header>
            <Title>Game Stats</Title>
            <ChartSetting />
          </Header>
          <GraphicWrapper>
            <GraphicChartArea chartData={data.chartData} showGraphs={showGraphs} />
            <ChartLegenda location={data.users} onClick={handleonChanged} showGraphs={showGraphs} />
          </GraphicWrapper>
        </ChartWrapper>
      )}
    </>
  )
}

export default Chart
