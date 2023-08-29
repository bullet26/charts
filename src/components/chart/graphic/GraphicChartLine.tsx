import { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { GraphiChartProps } from '../type'

const lGraphicChartLine: FC<GraphiChartProps> = (props) => {
  const { chartData, showGraphs } = props

  return (
    <ResponsiveContainer height={248} width="100%">
      <LineChart data={chartData}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        {showGraphs[0].status && <Line type="monotone" dataKey="blue" stroke="#18A0FB" />}
        {showGraphs[1].status && <Line type="monotone" dataKey="red" stroke="#ED2D95" />}
        {showGraphs[2].status && <Line type="monotone" dataKey="green" stroke="#3CDC86" />}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default lGraphicChartLine
