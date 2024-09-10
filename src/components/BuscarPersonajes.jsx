import React, { useState } from 'react'

export const BuscarPersonajes = ({ onSearch }) => {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')

    return (
        <>
            <div className="text-center mb-4">
                <h1>{name || species ? `Resultados para: ${name} ${species}` : "Busca tu personaje"}</h1>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex w-100 max-w-md">
                    <input 
                        type="text" 
                        className="form-control m-2 bg-light fs-5" 
                        placeholder="Buscar por nombre"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        className="form-control m-2 bg-light fs-5" 
                        placeholder="Filtrar por especie"
                        value={species} 
                        onChange={(e) => setSpecies(e.target.value)} 
                    />
                    <button type="button" className="btn btn-outline-dark m-2 fs-4 px-4 py-2"  onClick={() => onSearch(name, species)} >Buscar</button>
                </div>
            </div>
        </>
    );
};

export default BuscarPersonajes


