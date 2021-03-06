import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'

export const ModalContext = createContext()

const ModalProvider = props => {

    const [ idreceta, guardarIdReceta ] = useState(null)
    const [ informacion, guardarReceta ] = useState({})

    useEffect(() => {
        const consultarAPI = async () => {
            if (!idreceta) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const respuesta = await axios.get(url)
            guardarReceta(respuesta.data.drinks[0])
        }
        consultarAPI()
    }, [idreceta])
    return (
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider