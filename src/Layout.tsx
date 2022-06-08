import styled from 'styled-components'
import {
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
  ColorProps,
  width,
  WidthProps,
  height,
  HeightProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  border,
  BorderProps
} from 'styled-system'

type ButtonProps = SpaceProps &
  FontSizeProps &
  ColorProps &
  FontWeightProps &
  WidthProps &
  BorderProps

const Button = styled.div<ButtonProps>`
  ${space}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${width}
  ${border} {
    display: inline-block;
    cursor: pointer;
  }
`
type BoxProps = SpaceProps &
  FontSizeProps &
  ColorProps &
  FontWeightProps &
  WidthProps &
  BorderProps &
  HeightProps &
  LayoutProps &
  FlexboxProps

const Box = styled.div<BoxProps>`
  ${space}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${width}
  ${height}
  ${layout}
  ${flexbox}
`

const Root = styled.div`
  font-family: 'Inter', sans-serif;
  line-height: 1.2;
  text-align: center;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
  * {
    box-sizing: border-box;
  }
`

export { Button, Box, Root }
