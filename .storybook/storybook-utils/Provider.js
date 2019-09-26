import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from 'src/store/configure-store.storybook'

const store = configureStore()
store.initLocation()

export default function Provider ({ story }) {
  return (
    <ReduxProvider store={store}>
      {story}
    </ReduxProvider>
  )
}
