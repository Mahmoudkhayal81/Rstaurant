import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext'   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </HashRouter>
  </StrictMode>
)
