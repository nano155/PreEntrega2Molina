
import { NavBar } from '../../ui/components/NavBar'
import { Footer } from '../../ui/components/Footer'
import { ItemList } from '../components/ItemList'




export const FoodPage = () => {


  return (
    <div className='background'>
      <NavBar />
      <ItemList array={[{
        'name': 'met',
        'category': 'food',
      },
      {
        'name': 'pork',
        'category': 'food',
      },
      {
        'name': 'chicken',
        'category': 'food',
      },
      {
        'name': 'burger',
        'category': 'food',
      },
      ]}
        type={'food'}
        message={'Disfruta nuestros deliciosos platos!!'}
      />

      <Footer />
    </div>
  )
}