import { FC, useEffect, useState } from 'react'
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts'
import { DiagrmPie } from '../type'
import { COLORS, handleResponsive } from '../utils'

const DiagramPie: FC<DiagrmPie> = (props) => {
  const { chartData } = props
  const [radius, setRadius] = useState({ inner: 85, outer: 100 })

  useEffect(() => {
    setRadius(handleResponsive())
  }, [])

  return (
    <ResponsiveContainer height={248} width="65%">
      <PieChart>
        <Pie
          data={chartData}
          innerRadius={radius.inner}
          outerRadius={radius.outer}
          paddingAngle={5}
          dataKey="value"
          cornerRadius={10}>
          {chartData.map((item, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default DiagramPie
