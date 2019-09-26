import 'babel-polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'src/store/configure-store'
import rootSagas from 'src/sagas'
import { App } from 'src/App'
import 'styles-global'
import { ThemeProvider } from 'emotion-theming'
import { ApolloProvider } from 'react-apollo'
import * as theme from 'theme'
import client from './apollo-config'

const store = configureStore()
store.runSaga(rootSagas)

const load = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>,
    document.querySelector('#app')
  )
}

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load)
} else {
  load()
}
