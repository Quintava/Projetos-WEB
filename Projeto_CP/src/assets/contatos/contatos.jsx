import './contatos.css'

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt
} from 'react-icons/fa'

function Contatos() {
  return (

    <section className="contatosContainer" id="contatos">

      <div className="topoContatos">

        <h2>Entre em Contato</h2>

        <p>
          Fale conosco para saber mais sobre o espaço,
          reservas e disponibilidade para eventos.
        </p>

      </div>

      <div className="cardsContatos">

        {/* WHATSAPP */}

        <a
          href="https://wa.me/5553999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >

          <FaWhatsapp />

          <h3>WhatsApp</h3>

          <p>
            Solicite informações e reservas.
          </p>

        </a>

        {/* INSTAGRAM */}

        <a
          href="https://instagram.com/centroportuguesrgoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >

          <FaInstagram />

          <h3>Instagram</h3>

          <p>
            Acompanhe fotos e novidades.
          </p>

        </a>

        {/* FACEBOOK */}

        <a
          href="https://facebook.com/centroportuguesdoriogrande"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >

          <FaFacebookF />

          <h3>Facebook</h3>

          <p>
            Veja publicações e eventos.
          </p>

        </a>

        {/* LOCALIZAÇÃO */}

        <a
          href="https://www.google.com/maps/search/?api=1&query=-32.138103342070636, -52.193144404575634"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >

          <FaMapMarkerAlt />

          <h3>Localização</h3>

          <p>
            Rio Grande - RS
          </p>

        </a>

      </div>

    </section>
  )
}

export default Contatos