import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Navegacao from './assets/topo/navegacao.jsx'
import Inicio from './assets/inicio/inicio.jsx'
import Destaques from './assets/destaques/destaques.jsx'
import Sobre from './assets/sobre/sobre.jsx'
import Contatos from './assets/contatos/contatos.jsx'
import Rodape from './assets/rodape/rodape.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
    <Inicio />
    <Destaques />
    <Sobre />
    <Contatos />
    <Rodape />
  </StrictMode>,
)