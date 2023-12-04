import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getItemByid } from '../helpers/getItemByid'

export const ItemDetail = () => {
  const {id} = useParams()

  const item = getItemByid(id)

  if(!item) return <Navigate to='/' /> 
  
  return (
    <>
    <div className="item-card">
      <figure className="item-image">
        <img src={`/src/assets/img/${item.name}.jpg`} alt={item.name} />
      </figure>
      <div className="item-text">
        <h4>{item.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, dolor minus accusamus ipsam magni totam?</p>
        <button >Agregar al carrito</button>
      </div>
    </div>
    </>
  )
}
