import styled from 'styled-components'
import {
  space,
  fontSize,
  fontWeight,
  color,
  width,
  height,
  flexbox,
  layout,
  border
} from 'styled-system'

const Button = styled.div`
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

const Box = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${width}
  ${height}
  ${layout}
  ${flexbox}
`

Box.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes
}

Button.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...color.propTypes,
  ...width.propTypes
}

export { Button, Box }
