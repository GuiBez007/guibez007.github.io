// Global style import


// Pages imports
import T01_Home from "./pages/T01_Home.jsx"


// React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <T01_Home />
  </StrictMode>,
)
