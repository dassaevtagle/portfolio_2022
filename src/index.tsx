import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/scss/index.scss';

const LOADING_TIME = 1500
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const render = () => {
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  )
}

const init = () => {
  switch(process.env.NODE_ENV){
    case 'development':
      render()
      break
    case 'test':
    case 'production':
    default:
      setTimeout(render, LOADING_TIME)
      break 
  }
}

init()
