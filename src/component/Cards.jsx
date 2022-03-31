import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css';

export default function Cards({cities, onClose}){
    if(cities){
return (
    <div className={style.cards}>
        {cities.map(c => <Card
                key={c.id}
                name={c.name}
                max={c.max}
                min={c.min}
                hum={c.max}
                wind={c.wind}
                img={c.img}
                id={c.id}
                temp={c.temp}
                time={c.timezone}
                onClose={onClose}/>
                )}
    </div>
    );
    }
    else{
        return(
            <div>
                <p>sin ciudad</p>
            </div>
        )
    }
}