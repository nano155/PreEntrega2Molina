
import { ItemCard } from './ItemCard'
import { filterByType } from '../helpers/filterByType'
import { Buttons } from './Buttons'


export const ItemList = ({ message, type, array}) => {

    const items = filterByType(type)
    
    return (
        <div className='section-cards'>
            <h1>{message}</h1>
            <Buttons initialvalue={array}/>
            <article className='card-list content'>

                {
                    items?.map(item => <ItemCard
                        key={item.id}
                        {...item}
                    />
                    )
                }
            </article>
        </div>
    )
}
