import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navegacao from './assets/topo/navegacao.jsx'
import Inicio from './assets/inicio/inicio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
    <Inicio />
  </StrictMode>,
)