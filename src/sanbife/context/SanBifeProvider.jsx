
import { SanBifeContext } from './SanBifeContext'
import arrayItems from '../data/json/item.json'



export const SanBifeProvider = ({ children }) => {
    

     const data = arrayItems

    return (
        <SanBifeContext.Provider value={{
           data
        }
        }>
            {children}
        </SanBifeContext.Provider>
    )
}
