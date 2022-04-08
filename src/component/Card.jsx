import React from 'react';
import style from'../styles/Card.module.css' 

export default function Card({name,max,min,img,onClose,id, temp, country}) {
   
    return(
        <div className={style.card}>
            <div >
                <button className={style.btn} onClick={() => onClose(id)} >X</button>
            </div>
            
            <div className={style.uno}>
                <h1 className={style.h1}>{name}({country})</h1 >        
                <br />   
                <h3>Temp: {temp}°c </h3>     
            </div>

            <div className={style.temp}>
                <div className={style.h3}>
                    <h2 >Min</h2>
                    <h3 >{min}°c </h3>
                </div>
                <div className={style.h3}>
                    <h2 >Max</h2>
                    <h3 >{max}°c</h3>
                </div>
            </div>
                
            
            <div>
                <img className={style.iconoClima} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
        
        </div>
    )
}
