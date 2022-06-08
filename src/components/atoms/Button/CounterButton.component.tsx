import React from 'react'
import { Button } from '../../../Layout'

type PageProps = {
  label?: string
  onClick?: () => void
}

const CounterButton = (props: PageProps): JSX.Element => {
  const { onClick, label = '' } = props

  return (
    <Button
      onClick={() => onClick && onClick()}
      p={[16, 18, 20]}
      color={'text'}
      fontSize={'M'}
      fontWeight={700}
      width={160}
      backgroundColor={'#fff'}
      borderRadius={24}
    >
      {label}
    </Button>
  )
}

export default CounterButton
