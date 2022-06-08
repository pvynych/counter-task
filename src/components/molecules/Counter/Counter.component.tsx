import React from 'react'
import { Box } from '../../../Layout'
import CounterButton from '../../atoms/Button/CounterButton.component'
import { RootState } from '../../../redux/store'
import { decrement, increment } from '../../../redux/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Counter = (): JSX.Element => {
  const { count } = useSelector((state: RootState) => state.counter1)
  const dispatch = useDispatch()

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  return (
    <Box
      backgroundColor="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CounterButton label={'-1'} onClick={handleDecrementClick} />

      <Box
        fontSize={'XXL'}
        fontWeight={700}
        color="secondary"
        m={['104px 0', '120px 0', '150px 0']}
      >
        {count}
      </Box>

      <CounterButton label={'+1'} onClick={handleIncrementClick} />
    </Box>
  )
}

export default Counter
