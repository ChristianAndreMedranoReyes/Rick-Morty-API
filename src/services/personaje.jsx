const API_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = async (name = '', species = '') => {
    try {
        const response = await fetch(`${API_URL}?name=${name}&species=${species}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
};
