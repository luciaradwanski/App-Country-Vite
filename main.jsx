import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './src/App'
import './src/index.css'
import { Provider } from 'react-redux'
import {store} from './src/store/index'

const root = createRoot(document.getElementById('app'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)



