// import logo from './logo.svg';
//import './App.css';
// import './style.css'


import { useState, useEffect } from 'react'
import Card from './components/CardComponent'
import PaginationComponent from './components/PaginationComponent';
import './App.css'




function App() {
  const [pagina, setPagina] = useState(1);
  // const itemsPerPage = 20;
  const [personajes, setPersonajes] = useState([])

  const [info, setInfo] = useState({})
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        setPersonajes(data.results)
      })
  }, [pagina])

  const itemsPerPage = 20;
  // const incrementarContador = () => {
  //   setCurrentPage(currentPage + 1)
  // }

  // const decrementarContador = () => {
  //   setCurrentPage(currentPage - 1)
  // }

  

  return (
    <>
      <h1>Serie Rick and Morty </h1>
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
export default App;
