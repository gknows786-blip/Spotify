import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Footer from './footer.jsx'
import Display from "./display.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Display />
    <Footer />
  </StrictMode>,
)
