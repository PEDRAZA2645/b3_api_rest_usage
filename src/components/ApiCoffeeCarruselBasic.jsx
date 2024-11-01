import axios from "axios"
import { useState, useEffect } from "react"
const ApiCoffeeCarruselBasic = () => {

    const [coffeeList, setCofeeList]= useState([]);//variable de estado
    useEffect(() =>{

        const fetchData = async () =>{
            try {
                
                const response = await axios.get('https://api.sampleapis.com/coffee/hot');
                setCofeeList(response.data);

            } catch (error) {
                console.log('ERROR RETRIEVING DATA FROM THE API', error);
            }
        };
        
        fetchData();

    }, []);

  return (
    <div className="container-fluid p-0">
      <div className="text-center mb-4">
        <h1 className="text-white">Coffee List</h1> {/* Título del carrusel centrado */}
      </div>
      <div className="carousel-container">
        <div id="coffeeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Mapeamos coffeeList para generar un item del carrusel por cada café */}
            {coffeeList.map((coffee, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                {/* Mostramos la imagen del café */}
                <img src={coffee.image} className="d-block w-100" alt={coffee.title} />
                <div className="carousel-caption d-none d-md-block">
                  {/* Mostramos el título y la descripción del café */}
                  <h5>{coffee.title}</h5>
                  <p>{coffee.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Botón para navegar al ítem anterior del carrusel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          {/* Botón para navegar al siguiente ítem del carrusel */}
          <button className="carousel-control-next" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApiCoffeeCarruselBasic
