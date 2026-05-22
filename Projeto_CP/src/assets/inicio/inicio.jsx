import './inicio.css'
import { FaInstagram } from 'react-icons/fa'
import emblema from '../img/emblema.png'


function Inicio() {
  return (
    <section className="inicioContainer" id="inicio">
      <div className="inicioOverlay">

        <div className="inicioConteudo">
          <span className="inicioEtiqueta">
            Tradição • Eventos • Confraternização
          </span>

          <img
            src={emblema}
            alt="Centro Português do Rio Grande"
            className="logoInicio"
          />

          <p>
            Um espaço acolhedor para festas, formaturas, celebrações e momentos
            especiais com família, amigos e comunidade.
          </p>

          <div className="inicioBotoes">
            <a href="#fotos" className="botaoInicio principal">
              Ver fotos
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="botaoInicio secundario"
            >
              <FaInstagram />

              Acompanhar no Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Inicio