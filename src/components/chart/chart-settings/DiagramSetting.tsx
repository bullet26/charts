import { FC, useState } from 'react'
import { Icon } from 'assets'
import { Checkbox } from 'UI'
import {
  SettngsTitle,
  SettngsSubtitle,
  SettngsTable,
  Wrapper,
  SettngsTableRowDiagram,
} from './Setting.styled'
import { DiagramProps } from '../type'

const DiagramSetting: FC<DiagramProps> = (props) => {
  const { location } = props
  const [showSettings, setShowSettings] = useState(false)
  const [activeType, setActiveType] = useState(1)

  const handleClick = () => {
    setShowSettings((prevState) => !prevState)
  }

  const handleonChanged = (id: number) => {
    setActiveType(id)
  }

  return (
    <Wrapper>
      <SettngsTitle onClick={handleClick} $isActive={showSettings}>
        <SettngsSubtitle>Location</SettngsSubtitle>
        {location[activeType].name}
        <Icon.ArrowDown />
      </SettngsTitle>
      {showSettings && (
        <SettngsTable type="d">
          {location.map(({ name }, i) => (
            <SettngsTableRowDiagram key={name + i + 10} onClick={() => handleonChanged(i)}>
              {name}
              {activeType === i && <Icon.Tick />}
            </SettngsTableRowDiagram>
          ))}
        </SettngsTable>
      )}
    </Wrapper>
  )
}

export default DiagramSetting
