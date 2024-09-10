import { useState, useEffect } from 'react';

const usePersonajes = (name, species) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchPersonajes = async () => {
            setLoading(true)
            setError(null)

            try {
                
                let url = `https://rickandmortyapi.com/api/character/?page=${page}`
                if (name) url += `&name=${name}`
                if (species) url += `&species=${species}`

                const res = await fetch(url)
                const data = await res.json()

                if (data.error) {
                    setError(data.error)
                } else {
                    setCharacters(data.results);
                    setTotalPages(data.info.pages)
                }
            } catch (err) {
                setError('Error al cargar personajes.')
            }

            setLoading(false)
        }

        fetchPersonajes()
    }, [name, species, page])

    return { characters, loading, error, page, setPage, totalPages }
}

export default usePersonajes


