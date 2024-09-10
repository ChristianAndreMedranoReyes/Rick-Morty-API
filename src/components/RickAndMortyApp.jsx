import React, { useState } from 'react'
import BuscarPersonajes from './BuscarPersonajes'
import ContenedorPersonajes from './ContenedorPersonajes'
import usePersonajes from '../hooks/usePersonaje'
import 'bootstrap/dist/css/bootstrap.min.css'


const RickAndMortyApp = () => {

    const [searchParams, setSearchParams] = useState({ name: '', species: '' })
    const { characters, loading, error, page, setPage, totalPages } = usePersonajes(searchParams.name, searchParams.species)

    const handleSearch = (name, species) => {
        setSearchParams({ name, species })
    };

    return (
        <div>
            <h1 className="text-center my-4">RICKandMORTY</h1>
            <BuscarPersonajes onSearch={handleSearch} />
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <ContenedorPersonajes 
                characters={characters} 
                page={page} 
                setPage={setPage} 
                totalPages={totalPages} 
            />
        </div>
    )
}

export default RickAndMortyApp;



