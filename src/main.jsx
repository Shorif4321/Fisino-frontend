import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './ParentContext/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
)
