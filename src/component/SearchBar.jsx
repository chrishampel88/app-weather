import React, { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
const [city, setCity] = useState(''); 

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')//despues del enter se borra

    }}>
      <div className={style.search}>

      <input
        className={style.input} 
        type="text"
        placeholder="City..."
        value={city}
        onChange={e=>setCity(e.target.value)}
        />
      <input className={style.input} type="submit" value="Search" />
        </div>
    </form>
  );
}
