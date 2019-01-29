import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import tableStore from './store/tableStore'
import App from './containers/App'


const store = tableStore();



render( 
  <Provider store = { store } >
    <App />
  </Provider>
  , document.getElementById('root')
)
