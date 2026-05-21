import '../../index.css'
import './nav.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className='container'>
      <nav className='menuBox'>

        <div className='logo'>
          Centro Português
        </div>

        <div className={`menu ${menuAberto ? 'active' : ''}`}>

          <a href="#inicio" className='box' onClick={() => setMenuAberto(false)}>
            Início
          </a>

          <a href="#fotos" className='box' onClick={() => setMenuAberto(false)}>
            Fotos
          </a>

          <a href="#sobre" className='box' onClick={() => setMenuAberto(false)}>
            Sobre
          </a>

          <a href="#contatos" className='box' onClick={() => setMenuAberto(false)}>
            Contatos
          </a>

        </div>

        <div
          className='menuMobile'
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </div>

      </nav>
    </div>
  )
}

export default Navegacao