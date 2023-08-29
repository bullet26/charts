import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 24px 115px 96px;
  column-gap: 16px;
  row-gap: 20px;
`

export const Title = styled.div`
  font-size: 13px;
  line-height: 20px;

  color: ${(props) => props.theme.colors.text};
`

export const TitleInfo = styled.div`
  font-size: 64px;
  line-height: 72px;

  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1800px) {
    font-size: 57px;
    line-height: 60px;
  }
`

export const Subtitle = styled.div`
  font-size: 11px;
  color: ${(props) => props.theme.colors.text}90;
`
export const Item = styled.div``

export const DiagramWrapper = styled.div`
  display: grid;
  grid-template-columns: 8px 16px;
  column-gap: 16px;
  row-gap: 24px;
  align-self: flex-start;
  margin-top: 30px;
`

export const Circle = styled.div<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.$color]};
`
export const DiagramtInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 20%;
`
