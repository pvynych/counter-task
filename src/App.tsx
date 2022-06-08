import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styleguide/defaulTheme'
import Counter from './components/molecules/Counter/Counter.component'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Counter />
      </div>
    </ThemeProvider>
  )
}

export default App
