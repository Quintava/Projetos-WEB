import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navegacao from './assets/topo/navegacao.jsx'
import Anuncios from './assets/baner/anuncios.jsx'
import Conteudo from './assets/conteudos/conteudo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
    <Anuncios />
    <Conteudo />
  </StrictMode>,
)
