import { useState } from 'react'
import '../../index.css'

function Anuncios() {

  const [index, setIndex] = useState(0);

  const imagens = [
    "https://picsum.photos/id/1015/1200/400",
    "https://picsum.photos/id/1016/1200/400",
    "https://picsum.photos/id/1018/1200/400"
  ];

  function proximo() {
    setIndex((prev) => (prev + 1) % imagens.length);
  }

  function anterior() {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  }

  return (
    <div className="carousel">

      {/* BOTÃO ESQUERDA */}
      <button className="btn prev" onClick={anterior}>❮</button>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imagens.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>

      {/* BOTÃO DIREITA */}
      <button className="btn next" onClick={proximo}>❯</button>

    </div>
  )
}

export default Anuncios;