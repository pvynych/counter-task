import * as CSS from 'csstype'

export interface ThemeColors {
  primary: CSS.Property.Color
  secondary: CSS.Property.Color
  text: CSS.Property.Color
  success: CSS.Property.Color
  warning: CSS.Property.Color
  error: CSS.Property.Color
  disabled: CSS.Property.Color
}

export const colors: ThemeColors = {
  primary: '#004761',
  secondary: '#8cd6bd',
  text: '#000',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  disabled: '#f5222d'
}
