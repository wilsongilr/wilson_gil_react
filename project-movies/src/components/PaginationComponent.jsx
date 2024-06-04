import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast, faBackwardFast } from '@fortawesome/free-solid-svg-icons';

const PaginationComponent = ({ pageCount, onPageChange, pagina }) => {
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-container">
            <button
                className="btn-items"
                onClick={() => onPageChange(1)}
                disabled={pagina === 0}
            >
                <FontAwesomeIcon icon={faBackwardFast}/>
            </button>

            {pageNumbers.map((index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index)}
                    className={`btn-items ${pagina === index -1 ? 'active' : ''}`}
                >
                    {index}
                </button>
            ))}

            <button
                className="btn-items"
                onClick={() => onPageChange(pageCount - 1)}
                disabled={pagina === pageCount - 1}
            >
                <FontAwesomeIcon icon={faForwardFast}/>
            </button>
        </nav>
    );
};

export default PaginationComponent;