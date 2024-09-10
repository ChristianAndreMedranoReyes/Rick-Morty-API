import React from 'react';

const ContenedorPersonajes = ({ characters, page, setPage, totalPages }) => {
    const maxPageNumbers = 5; 
    const startPage = Math.floor((page - 1) / maxPageNumbers) * maxPageNumbers + 1;
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container">
            <div className="row">
                {characters.map((character) => (
                    <div key={character.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={character.image} alt={character.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">{character.species}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {/* Botón para ir al grupo anterior */}
                    <li className={`page-item ${startPage === 1 ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => setPage(startPage - 1)} 
                            aria-label="Previous" 
                            disabled={startPage === 1}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>

                    {pageNumbers.map((pageNumber) => (
                        <li key={pageNumber} className={`page-item ${pageNumber === page ? 'active' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${endPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                            className="page-link" 
                            onClick={() => setPage(endPage + 1)} 
                            aria-label="Next" 
                            disabled={endPage === totalPages}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ContenedorPersonajes


