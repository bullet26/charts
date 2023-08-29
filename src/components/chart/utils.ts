export const menu = ['Diagrams', 'Graph', 'Table', 'Paragraph']

export const bgcolor = [
  'diagramBlue',
  'diagramRed',
  'diagramGreen',
  'diagramOrange',
  'diagramViolet',
]

export const legenda = ['Roles', 'Users', 'Plolicies']

export const COLORS = ['#18A0FB', '#ED2D95', '#3CDC86', '#F4A732', '#9B53F8']
export const dataKey = ['blue', 'red', 'green', 'orange', 'violet']
export const gradient = ['url(#blue)', 'url(#red)', 'url(#green)', 'url(#orange)', 'url(#violet)']

export const handleResponsive = () => {
  const windowWidth = window.innerWidth

  if (windowWidth >= 1920) {
    return { inner: 85, outer: 100 }
  }
  if (windowWidth < 1920 && windowWidth > 1200) {
    return { inner: 65, outer: 80 }
  }
  return { inner: 40, outer: 65 }
}
