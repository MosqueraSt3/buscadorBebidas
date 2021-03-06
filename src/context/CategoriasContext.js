import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// Crear el Context
export const CategoriasContext = createContext()

// Provider
const CategoriasProvider = props => {

    // State
    const [ categorias, guardarCategorias ] = useState([])

    // API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        consultarAPI()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider