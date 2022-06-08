import React from 'react'
import { Box } from '../../../Layout'
import CounterButton from '../../atoms/Button/CounterButton.component'

const Counter = (): JSX.Element => {
  return (
    <Box
      backgroundColor="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CounterButton label={'-1'} />
      <Box
        fontSize={'XXL'}
        fontWeight={700}
        color="secondary"
        m={['104px 0', '120px 0', '150px 0']}
      >
        0
      </Box>
      <CounterButton label={'+1'} />
    </Box>
  )
}

export default Counter
