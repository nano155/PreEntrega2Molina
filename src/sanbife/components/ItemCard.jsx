import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({name, precio, cantidad, nameId}) => {
  return (
    <div className='card'>
        <figure className='card-image'>
            <img src={`/src/assets/img/${name}.jpg`} alt={name} />
        </figure>
        <section className='card-text'>
            <Link to={`/item/${nameId}`}>
            <h3>
                {name}
            </h3>
            </Link> 
            <div className='card-cantidad'>
            <p>
                Cantidad:
            </p>
            <div className='buttons'>
                <button className='btn'><strong>+</strong></button>
                <p>{cantidad}</p>
                <button className='btn'><strong>-</strong></button>
            </div>

            </div>
            <p>
                Valor: ${precio}
            </p>
            <button className='add'>
                Agregar al carrito
            </button>
        </section>
    </div>
  )
}
