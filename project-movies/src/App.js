// import logo from './logo.svg';
import './App.css';
// import './style.css'


function App() {
  return (

   <div>
    
    <h1>PELICULAS FAVORITAS</h1>
    <div className="container">
     
       


      <div className="card">
        <div className="card__title">El planeta de los simios </div>
        <div className="card__image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-VXDjgou0GNRKW04ehh9AxhXTWEGWyqChKuSAXURqbv44TJq3OVU5S8DTRAfSnB9h7xl" alt="JONH WICK 4" />
        </div>

        <div className="card__content">

          <p className="card__text">Después del reinado de César, en la que los simios son la especie
            dominante que vive en armonía y los humanos se han visto reducidos
            a vivir en las sombras. Mientras un nuevo líder simio tiránico
            construye su imperio, un joven simio emprende un viaje desgarrador
            que lo hará cuestionar todo lo que sabía sobre el pasado y tomar
            decisiones que definirán el futuro tanto de los simios como de los humanos.</p>
          {/* <button className="btn btn--block card__btn">Button</button> */}
        </div>
      </div>
      <div className="card">
        <div className="card__title">John Wick 4</div>
        <div className="card__image">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.jpg" alt="JONH WICK 4" />

        </div>

        <div className="card__content">

          <p className="card__text">El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema. Sin embargo, John tratará de adelantarse a cada uno de sus movimientos hasta lograr enfrentarse cara a cara con su peor enemigo.</p>
          {/* <button className="btn btn--block card__btn">Button</button> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;