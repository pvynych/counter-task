import Counter from './index'
import { render } from '@testing-library/react'
import * as redux from 'react-redux'
import configureStore from 'redux-mock-store'

const mockedData = 0

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

describe('Release', () => {
  const mockStore = configureStore()
  beforeEach(() => {
    redux.useSelector.mockImplementation(() => {
      return { data: mockedData }
    })
  })
  test('render', async () => {
    render(
      <redux.Provider store={mockStore()}>
        <Counter />
      </redux.Provider>
    )
  })
})
