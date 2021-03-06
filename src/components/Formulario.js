import React, {useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        buscarRecetas(busqueda)
        guardarConsultar(true)
    }

    return (
        <form
            className="col-md-12"
            onSubmit={handleSubmit}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione Categoria --</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="btn btn-primary btn-block"
                        type="submit"
                        placeholder="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario