import { useState, useEffect } from 'react'
import Card from './components/CardComponent'
import PaginationComponent from './components/PaginationComponent';
import './App.css'




function Search() {
  const [pagina, setPagina] = useState(1);
  const [personajes, setPersonajes] = useState([]);
  const [charactersList, setCharactersList] = useState([]);
  const [info, setInfo] = useState({});
  const [nameFilter, setnameFilter] = useState('');
  const [genderFilter, setgenderFilter] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        setPersonajes(data.results)
      })
  }, [pagina])


  useEffect(() => {
    const queryParams = [];
    if (nameFilter) queryParams.push(`name=${nameFilter}`);
    if (genderFilter) queryParams.push(`gender=${genderFilter}`);
    const queryString = queryParams.join('&');

    fetch(`https://rickandmortyapi.com/api/character/${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setCharactersList(data.results)
      })
  },[nameFilter,genderFilter])


  const handleNameFilterChange = (event) => {
    setnameFilter(event.target.value);
  }

  const handleGenderFilterChange = (event) => {
    setgenderFilter(event.target.value);
  }



  const itemsPerPage = 20;


  return (
    <>

      <div className='box-title'>
          <h1>SERIE RICKY AND MORTY </h1>
      </div>
     
      <div className='container'>
        <input className='filter' value={nameFilter} onChange={handleNameFilterChange}  type="text" placeholder="Search Character/name" />
        <select className='filter' value={handleGenderFilterChange}>
          <option value="">Select genre :</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className='btn-search' onClick={search}  >search</button>
      </div>
      <div className="container">
        {personajes.length !== 0 && personajes?.map((personaje) => (

          <Card key={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image} />

        ))}
      </div>
      <div className='card_footer'>

       


        <PaginationComponent
          pageCount={info.pages}
          itemsPerPage={itemsPerPage}
          onPageChange={(pagina) => setPagina(pagina)}
        />

      </div>
    </>
  )
}
export default Search;
