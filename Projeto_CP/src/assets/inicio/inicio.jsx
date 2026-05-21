import './inicio.css'

function Inicio() {
  return (
    <section className="inicioContainer" id="inicio">
      <div className="inicioOverlay">

        <div className="inicioConteudo">
          <span className="inicioEtiqueta">
            Tradição • Eventos • Confraternização
          </span>

          <h1>Centro Português</h1>

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
              Acompanhar no Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Inicio