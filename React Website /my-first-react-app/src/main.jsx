import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// strict mode helps in finding potential problems in the app (turn off to stop useEffect from running twice in dev mode)
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
