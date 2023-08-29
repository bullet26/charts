import { FC } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { GraphiChartProps } from '../type'
import { COLORS, dataKey, gradient } from '../utils'

const GraphicChartArea: FC<GraphiChartProps> = (props) => {
  const { chartData, showGraphs } = props
  console.log(showGraphs)

  return (
    <ResponsiveContainer height={250} width="100%">
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS[1]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={COLORS[1]} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS[2]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={COLORS[2]} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        {chartData.map(
          (item, i) =>
            showGraphs[i]?.status && (
              <Area
                key={i}
                type="monotone"
                dataKey={dataKey[i]}
                stroke={COLORS[i]}
                fillOpacity={1}
                fill={gradient[i]}
                strokeWidth={3}
                dot={{ r: 3, fill: COLORS[i] }}
              />
            ),
        )}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default GraphicChartArea
