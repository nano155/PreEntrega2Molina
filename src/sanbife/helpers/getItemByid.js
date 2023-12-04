import { useContext } from "react"
import { SanBifeContext } from "../context/SanBifeContext"


export const getItemByid = (id) => {
    const {data} = useContext(SanBifeContext)

    return data.find(dato => dato.nameId === id);

}
