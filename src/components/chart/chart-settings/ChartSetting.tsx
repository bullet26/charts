import { FC, useState } from 'react'
import { Icon } from 'assets'
import { Checkbox } from 'UI'
import {
  SettngsTitle,
  SettngsSubtitle,
  SettngsTable,
  Wrapper,
  SettngsTableRow,
} from './Setting.styled'
import { menu } from '../utils'

const ChartSetting: FC = () => {
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
        <SettngsSubtitle>Data type</SettngsSubtitle>
        {menu[activeType]}
        <Icon.ArrowDown />
      </SettngsTitle>
      {showSettings && (
        <SettngsTable type="ch">
          {menu.map((item, i) => (
            <SettngsTableRow key={item}>
              <Checkbox
                key={item}
                id={i}
                mode="circle"
                onChange={handleonChanged}
                checked={i === activeType}
              />
              {item}
            </SettngsTableRow>
          ))}
        </SettngsTable>
      )}
    </Wrapper>
  )
}

export default ChartSetting
