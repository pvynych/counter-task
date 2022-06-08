import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styleguide/defaulTheme'
import Counter from './components/molecules/Counter/Counter.component'
import { Root } from './Layout'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Root>
        <Counter />
      </Root>
    </ThemeProvider>
  )
}

export default App
