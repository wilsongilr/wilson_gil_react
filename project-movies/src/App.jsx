// import logo from './logo.svg';
//import './App.css';
// import './style.css'


import { useState, useEffect } from 'react'
import Card from './components/CardComponent'
import Pagination from './Pagination';
import './App.css'



function App() {
  const [pagina, setPagina] = useState(0)
  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
      .then((info) => setInfo(info))
  }, [pagina])
  // const incrementarContador = () => {
  //   setPagina(pagina + 1)
  // }

  // const decrementarContador = () => {
  //   setPagina(pagina - 1)
  // }


  const PaginatedComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const getCurrentPageItems = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return info.slice(startIndex, endIndex);
    };



  return (
    <>
      <h1>Serie Rick and Morty </h1>
      <div className="container">
        {personajes.length !== 0 && personajes.map((personaje) => (

          <Card key={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image} />

        ))}
      </div>
      {/* <div className='card_footer'>
        <button onClick={decrementarContador} >previous </button>
        <button onClick={incrementarContador} >next</button>
        </div> */}

      <div>
        <ul>
          {getCurrentPageItems().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Pagination
          totalItems={info.count}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>



    </>
  )
}



// function App() {
//   return (

//    <div>

//     <h1>PELICULAS FAVORITAS</h1>


//     <div className="container">




//       <div className="card">
//         <div className="card__title">El planeta de los simios </div>
//         <div className="card__image">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-VXDjgou0GNRKW04ehh9AxhXTWEGWyqChKuSAXURqbv44TJq3OVU5S8DTRAfSnB9h7xl" alt="JONH WICK 4" />
//         </div>

//         <div className="card__content">

//           <p className="card__text">Después del reinado de César, en la que los simios son la especie
//             dominante que vive en armonía y los humanos se han visto reducidos
//             a vivir en las sombras. Mientras un nuevo líder simio tiránico
//             construye su imperio, un joven simio emprende un viaje desgarrador
//             que lo hará cuestionar todo lo que sabía sobre el pasado y tomar
//             decisiones que definirán el futuro tanto de los simios como de los humanos.</p>
//           {/* <button className="btn btn--block card__btn">Button</button> */}
//         </div>
//       </div>
//       <div className="card">
//         <div className="card__title">John Wick 4</div>
//         <div className="card__image">
//           <img src="https://m.media-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.jpg" alt="JONH WICK 4" />

//         </div>

//         <div className="card__content">

//           <p className="card__text">El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. Sin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.</p>
//           {/* <button className="btn btn--block card__btn">Button</button> */}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

export default App;
