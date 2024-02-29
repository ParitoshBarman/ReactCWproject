import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UniversalContextProvider from './context/UniversalContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UniversalContextProvider>
      <App />
    </UniversalContextProvider>
  </React.StrictMode>
)
