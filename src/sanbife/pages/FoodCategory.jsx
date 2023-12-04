import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { filterByCategory } from '../helpers/filterByCategory';
import { NavBar } from '../../ui/components/NavBar';
import { Footer } from '../../ui/components/Footer';
import { ItemCard } from '../components/ItemCard';


export const FoodCategory = () => {
  const {id} = useParams()
  
  const arreglo = (filterByCategory(id));

  const navigate = useNavigate()

  const onBack = () =>{
    navigate(-1)
  }
  if (arreglo.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <div className='background'>
      <NavBar />
      <div className='section-cards'>
            <h1>{id}</h1>
            <article className='card-list content'>
                {
                    arreglo?.map(item => <ItemCard
                        key={item.id}
                        {...item}
                    />
                    )
                }
            </article>
        <button className='button-back' onClick={onBack}><strong>Back</strong></button>
        </div>        
      <Footer />
    </div>
  )
}
