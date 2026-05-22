import './destaques.css'

import churrasqueira from '../img/churrasqueira.jpg'
import salao from '../img/interno-salao.jpg'
import estacionamento from '../img/estacionamento.jpg'

function Destaques() {
  return (
    <section className="destaquesContainer" id="espaco">

      <div className="topoDestaques">
        <h1>Conheça Nosso Espaço</h1>

        <p>
          Estrutura completa para confraternizações,
          eventos e momentos especiais.
        </p>
      </div>

      <div className="destaqueItem">
        <img src={salao} alt="Salão principal do Centro Português" />

        <div className="textoDestaque">
          <h2>Salão amplo e aconchegante</h2>

          <p>
            Ambiente espaçoso e preparado para aniversários,
            confraternizações, jantares e eventos especiais.
          </p>
        </div>
      </div>

      <div className="destaqueItem reverse">
        <img src={churrasqueira} alt="Churrasqueira do Centro Português" />

        <div className="textoDestaque">
          <h2>Espaço com churrasqueira</h2>

          <p>
            Estrutura ideal para encontros entre amigos e famílias,
            oferecendo conforto e praticidade para sua confraternização.
          </p>
        </div>
      </div>

      <div className="destaqueItem">
        <img src={estacionamento} alt="Estacionamento do Centro Português" />

        <div className="textoDestaque">
          <h2>Estacionamento amplo e seguro</h2>

          <p>
            Espaço pensado para oferecer comodidade, segurança e tranquilidade
            aos convidados durante os eventos.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Destaques