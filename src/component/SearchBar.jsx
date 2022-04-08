import React, { useState } from "react";
import style from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
const [city, setCity] = useState(''); 

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')//despues del enter se borra
    }}>
      <div className={style.search} id={style.searchContainer}>
        <input
          className={style.input} 
          id={style.inputSearch}
          type="text"
          placeholder="City..."
          value={city}
          onChange={e=>setCity(e.target.value)}
          >
        </input>
        <button className={style.input} id={style.inputSendData} type="submit" value="Search" ><img src="https://img.icons8.com/ios/344/search--v1.png" alt="Search-icon" /></button>
      </div>
    </form>
  );
}
