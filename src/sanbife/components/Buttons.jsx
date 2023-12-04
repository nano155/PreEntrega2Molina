import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Buttons = ({initialvalue}) => {
    const [items, setItems] = useState(initialvalue)
    

    useEffect(() => {
      setItems(initialvalue)
    }, [initialvalue])
    

  return (
    <div className='category'>
    {
        items?.map(item =>(<Link to={`category/${item.name}`} key={item.name}><button data-id={item.name} className='button-category' ><strong>{item.name}</strong></button></Link>))   
    }
    </div>
  )
}

