export interface SettingsChartStyled {
  $isActive: boolean
}

type Location = { name: string; date?: string }
type ShowGraphs = { id: number; status: boolean; color: string }

export interface DiagramProps {
  location: Location[]
}

export interface ChartramProps {
  location: Location[]
  showGraphs: ShowGraphs[]
  onClick: (id: string | number) => void
}

export interface GraphiChartProps {
  chartData: { blue: number; red: number; green: number; date: string }[]
  showGraphs: ShowGraphs[]
}

export interface DiagrmPie {
  chartData: { name: string; value: string }[]
}
