import React from 'react'

const CountryDetail = ({image, name, id, continent, subregion, capital, area, population}) => {
    return (
        <div className='flex flex-row justify-between gap-16'>
            <div>
                <img className='w-[150px] h-[80px] rounded-full ' src={image} alt={image} />
            </div>
            <div>
                <h2 className='font-bold '>{name}</h2>
                <h3 className='font-medium pt-4'>{continent}</h3>    
                <h2>{id}</h2>
                <h3>Subregion: {subregion}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Area: {area} km2</h3>
                <h3>Población: {population} personas</h3>  
            </div>
            
        </div>
    )
}

export default CountryDetail