import { useState, useEffect } from 'react';
import Card from './components/CardComponent';
import PaginationComponent from './components/PaginationComponent';
import './App.css';

function App() {
  const [pagina, setPagina] = useState(1);
  const [params, setParams] = useState('');
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }



  const dataCharacters = (page, queryString) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info);
        setPersonajes(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    dataCharacters(pagina, params);
  }, [pagina, params]);

  const onSearch = () => {
    //  event.preventDefault();
    // alert('Estoy en onsearch');
    const queryParams = [];
    if (nameFilter) queryParams.push(`name=${nameFilter}`);
    if (genderFilter) queryParams.push(`gender=${genderFilter}`);
    if (statusFilter) queryParams.push(`status=${statusFilter}`);
    const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';
    setPagina(1);
    setParams(queryString);
    // fetchCharacters(1, nameFilter, genderFilter);
    dataCharacters(1, queryString);
  
  };

  const itemsPerPage = 20;

 
  return (
    <>
      
      <div className='box-title'>
        <h1>SERIE RICKY AND MORTY </h1>
        {error && <p>{error}</p>}
      </div>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        
          <input
            className='filter'
            type='text'
            placeholder='Search Character/name'
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <select
            className='filter'
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value=''>Select genre :</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
          </select>
          <select
            className='filter'
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value=''>Select status :</option>
            <option value='alive'>Alive</option>
            <option value='dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </select>
          <button type='submit'className='btn-search'>
            Search
          </button>
      </form>
      </div>
      

      <div className='container'>
      { personajes.length === 0 ? (
        
          <Card
          title={ <p>No characters found</p>}
          />
         
        ) : (
          personajes.map((personaje) => (
            <Card
              key={personaje.id}
              title={personaje.name}
              genre={personaje.gender}
              status={personaje.status}
              img={personaje.image}
            />
          ))
          )}
      </div>
      <div className='card_footer'>
      
          <PaginationComponent
            pageCount={info.pages}
            itemsPerPage={itemsPerPage}
            onPageChange={(newPage) => setPagina(newPage)}
          />
      
      </div>
    </>
  );
}

export default App;

