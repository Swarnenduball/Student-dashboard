import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavToggle from './Contexts/NavToggle.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavToggle>
    <StrictMode>
    <App />
  </StrictMode>
 </NavToggle> </BrowserRouter>
  
)
