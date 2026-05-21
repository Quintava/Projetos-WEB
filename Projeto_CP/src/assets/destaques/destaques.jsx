import './destaques.css'

function Destaques() {

  return (

    <section
      className='destaquesContainer'
      id='fotos'
    >

      <div className='topoDestaques'>

        <h1>
          Conheça Nosso Espaço
        </h1>

        <p>
          Estrutura completa para confraternizações,
          eventos e momentos especiais.
        </p>

      </div>

      {/* ITEM 1 */}

      <div className='destaqueItem'>

        <img
          src='https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400'
          alt='Salão principal'
        />

        <div className='textoDestaque'>

          <h2>
            Salão amplo e aconchegante
          </h2>

          <p>
            Ambiente espaçoso, climatizado e preparado
            para aniversários, confraternizações,
            jantares e eventos especiais.
          </p>

        </div>

      </div>

      {/* ITEM 2 */}

      <div className='destaqueItem reverse'>

        <img
          src='https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1400'
          alt='Churrasqueira'
        />

        <div className='textoDestaque'>

          <h2>
            Espaço gourmet com churrasqueira
          </h2>

          <p>
            Estrutura ideal para encontros entre amigos
            e famílias, oferecendo conforto e praticidade
            para sua confraternização.
          </p>

        </div>

      </div>

      {/* ITEM 3 */}

      <div className='destaqueItem'>

        <img
          src='https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1400'
          alt='Estacionamento'
        />

        <div className='textoDestaque'>

          <h2>
            Estacionamento amplo e seguro
          </h2>

          <p>
            Espaço pensado para oferecer comodidade,
            segurança e tranquilidade aos convidados
            durante os eventos.
          </p>

        </div>

      </div>

    </section>

  )
}

export default Destaques