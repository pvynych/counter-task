import { Theme } from 'styled-system'
import { colors } from './colors'
import { space } from './space'
import { fontSyzes } from './fontSyzes'

export const breakpoints: string[] = ['424px', '767px', '1023px']

export const defaultTheme: Theme = {
  space: {
    ...space
  },
  fontSizes: {
    ...fontSyzes
  },
  breakpoints,
  colors: {
    ...colors
  }
}
