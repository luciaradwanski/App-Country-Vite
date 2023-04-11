import React, { useState } from 'react';
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import { detailCountry } from '../store/countries/countriesSlice';
import CountryDetail from './CountryDetail';
import Activity from '../components/Activity'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Detail = (props) => {
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.paises.detail)
    const [set, setSet] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        dispatch(detailCountry(id));
        console.log('ID', id);
    }, [dispatch, id]);

    return (
        <div className='flex flex-col mt-10 justify-between items-center w-full h-[550px]'>
            <div className='flex gap-36 justify-center'>
                <Link to="/home">
                    <button className='bg-black text-white p-2 rounded-2xl w-[80px] hover:bg-pink-700'>Back</button>
                </Link>
                <Link to="/activity">
                    <button className='bg-black text-white p-2 rounded-2xl w-[80px]  hover:bg-pink-700'>Create</button>
                </Link>
            </div>
            <div className='border-2 border-black-500 rounded-2xl bg-opacity-50 bg-gray-100 select-none w-[800px] h-auto mt-10 p-10'>
                <div className='flex justify-between items-center content-center'>
                    <div className='flex justify-start items-start w-[300px] h-[180px] ml-n30 mb-56 '>
                        <FaMapMarkerAlt className='animate-ping  z-10 ml-8'/>
                        <h1 className='font-bold absolute bg-[#B5E5F6] h-[400px] p-6 text-center rounded-full '>{id}</h1>
                        <hr className='h-[400px]  max-h-xs border-[1.5px] border-black-500 ml-40'/>
                    </div>

                    {set ? 
                            <div className='flex justify-center'>
                                <CountryDetail
                                    name={detail?.name}
                                    continent={detail?.continent}
                                    capital={detail?.capital}
                                    area={detail?.area}
                                    subregion={detail?.subregion}
                                    population={detail?.population}
                                    image={detail?.image}
                                />
                                {/* <h2>Nombre: {detail.name} </h2>
                                <h2>Continente: {detail.continent}</h2>
                                <h3>Capital: {detail.capital}</h3>
                                <h3>Area: {detail.area} </h3>
                                <h3>Subregion: {detail.subregion}</h3>
                                <h3>Poblacion: {detail.population}</h3> */}
                            </div>

                    :   <div className='flex flex-col justify-around items-center w-[350px] gap-4'>
                            {detail.activities && detail.activities.length>0 ?detail.activities.map((el, index)=>{
                                return(
                                    <div style={{"display": "flex", "justifyContent" : "flex-start"}} key={index}>                                                                                               
                                        <Activity
                                            id = {el.id}
                                            name = {el.name}
                                            difficulty = {el.difficulty}
                                            duration = {el.duration}
                                            season = {el.season}
                                            key = {el.id}
                                        />
                                    </div>   
                                )
                            }) : <h4>No hay actividades registradas</h4> } 
                        </div> 
                    }
                </div>
                
                <div className='flex justify-end mt-10'>
                    { set ? 
                        <button className='bg-black text-white p-2 rounded-2xl w-full hover:bg-pink-700' onClick={()=> setSet(!set)}>Mostrar Activades</button> 
                    :   
                        <button className='bg-black text-white p-2 rounded-2xl w-full  hover:bg-pink-700' onClick={()=> setSet(!set)}>Mostras informacion</button>
                    }
                </div>
            </div>
        </div >
        
    )
}

export default Detail