import React,{ useState } from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards';
import style from './Home.module.css'

//const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [cities, setCities]=useState([]) //creo el useState para guardarme el estado de las ciudades
  
function onSearch(city){
try{

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0010818425705f55e28c0b5e0231091&units=metric`)//recivo datos de la API
  .then(resp=>resp.json())// la paso a formato JSON
  .then((recurso)=>{
    if(recurso.cod==='404'){
      alert('ciudad no encontrada')
    }
    else{
      const ciudad={
        
        id: recurso.id,
        country:recurso.sys.country,
        temp: Math.floor(recurso.main.temp),
        name: recurso.name,
        min: Math.floor(recurso.main.temp_min),
        max: Math.floor(recurso.main.temp_max),
        humidity:recurso.main.humidity,
        wind: recurso.wind.speed,
        img: recurso.weather[0].icon,
        time:recurso.timezone,
      }
      setCities(state => [...state, ciudad])// oldCities es el arreglo vacio, al usar ... oldCities, ciudad => al arreglo  oldCities le agrego la ciudad buscada
    }
  })
    }catch(err){
    console.log(err);
  }
}
function onClose(id){
  setCities(state => state.filter(city => city.id !== id))// filtro negando la igualdad, => mostrame todos menos el que coincida con el id
 }

  return (
    <div className={style.column1} >
      <div>
         <div className={style.divTitle} >
                <h5 >This is my first app, where we can search for one or several cities by name and see their weather conditions.
For this app I use the following technologies: HTML, CSS, JavaScript, Bootstrap and React.
I hope you like them!</h5>
            </div>
          <br/>
          <h1 className={style.title}>Search a city</h1>
          <br /><br />
          <SearchBar 
            onSearch={onSearch}/>
          <Cards 
            cities={cities} 
            onClose={onClose}/>
          </div>
      <div className={style.column2}>
        </div>
    </div>
  );
}
// 41 se la pasa al SearchBar por props

//43 y 44 se la paso a Cards por props
export default App;