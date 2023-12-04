import { useContext } from "react"
import { SanBifeContext } from "../context/SanBifeContext"



export const filterByCategory = (category) => {
    const {data} = useContext(SanBifeContext)
    return data.filter(dato => dato.category === category)  

}
