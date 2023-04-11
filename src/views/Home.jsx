import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {FiSearch} from 'react-icons/fi'
import Paginado from '../components/Paginado'
import Card from '../components/Card'
import {  filterByContinent, filterByPopulation, filterByActivity, getCountries,  getDataCountries, orderByName, getNameCountry } from '../store/countries/countriesSlice'
import NavBar from '../components/NavBar'
import { getDataActivities } from '../store/activities/activitySlice'
import { nameCountry } from '../store/countries/countriesSlice'

const Home = () => {

    const dispatch = useDispatch()
    const paises = useSelector((state) => state.paises.countries)
    const actividades = useSelector((state) => state.actividades.activities)
    useEffect(()=>{
        dispatch(getDataCountries())
        dispatch(getDataActivities())
    },[dispatch])


    
    
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, ] = useState(9) //setCharactersPerPage
    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCountries = paises.slice(indexOfFirstCharacter, indexOfLastCharacter)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    const [, setOrden] = useState('')
    const [, setPopulation] = useState('')
    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name);
        setCurrentPage(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(nameCountry(name))
        setCurrentPage(1)
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getDataCountries());
        setCurrentPage(1)
    }

    const handleFilterContinent = (e) => {
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1);
    }

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    const handleFilterPopulation = (e) => {
        dispatch(filterByPopulation(e.target.value));
        setCurrentPage(1);
        setPopulation(`Filtrado ${e.target.value}`)
    }

    const handleFilterActivity = (e) => {
        if(e.target.value !=='Elegir Actividad'){
            dispatch(filterByActivity(e.target.value))
            setCurrentPage(1)
        }        
    }


    return (
        <div className='w-full h-screen'>
            
            <NavBar/>
            
            <div className=' mb-10 flex justify-center gap-6 bg-black w-full items-center content-center p-6'>
                
                    <Link to='/activity'><button className='font-semibold bg-black text-white rounded-2xl p-4 hover:bg-pink-700'>Create Activities</button></Link>
                    <button onClick={(e) => handleClick(e)} className='font-semibold bg-black text-white  hover:bg-pink-700 p-4 rounded-2xl'>Todos los países</button>
                
                <div className='flex gap-4' id="InputB">
                    <input className='font-semibold bg-black text-white rounded-2xl p-4 hover:bg-pink-700' type='text' placeholder="Search..." onChange={(e) => handleInputChange(e)}/> 
                    <button className='font-semibold bg-black text-white rounded-2xl p-4 hover:bg-pink-700' type="submit" onClick={(e) => handleSubmit(e)}><FiSearch/></button>
                </div>
                
            

            


                    <select className='font-semibold bg-black text-white  hover:bg-pink-700 p-4 rounded-2xl text-center' onChange={(e) => handleSort(e)}>
                        <option className='text-white bg-black text-justify' value="All">Orden</option>
                        <option className='text-white bg-black text-justify' value="asc">Ascendent</option>
                        <option className='text-white bg-black text-justify' value="desc">Descendent</option>
                    </select>
                    <select onChange={(e) => handleFilterContinent(e)} className='font-semibold bg-black text-white  hover:bg-pink-700 p-4 rounded-2xl text-center' >
                        <option className='text-white bg-black text-justify' value="All">Continentes</option>
                        <option className='text-white bg-black text-justify' value="Europe">Europe</option>
                        <option className='text-white bg-black text-justify' value="South America">South America</option>
                        <option className='text-white bg-black text-justify' value="Asia">Asia</option>
                        <option className='text-white bg-black text-justify' value="Antarctica">Antarctica</option>
                        <option className='text-white bg-black text-justify' value="Africa">Africa</option>
                        <option className='text-white bg-black text-justify' value="North America">North America</option>
                        <option className='text-white bg-black text-justify' value="Oceania">Oceania</option>
                    </select>
                        <select onChange={(e) => handleFilterPopulation(e)} className='font-semibold bg-black text-white  hover:bg-pink-700 p-4 rounded-2xl text-center' > 
                            <option className='text-white bg-black text-justify' value="All">Popularidad</option>
                            <option className='text-white bg-black text-justify' value="ASC">Máxima</option>
                            <option className='text-white bg-black text-justify'value="DES">Mínima</option>
                        </select>
                        <select className='font-semibold bg-black text-white  hover:bg-pink-700 p-4 rounded-2xl text-center'  onChange = {e => handleFilterActivity(e)}>                
                            <option value="All" defaultValue='default'>Actividades</option>
                            {actividades && actividades.length > 0 && actividades.map((act, index) => {
                                return <option className='text-white bg-black text-justify' key={index} value= {act.name}>{act.name}</option>
                            })}                
                        </select>
            </div>

                    <Paginado
                        charactersPerPage={charactersPerPage}
                        paises={paises.length}
                        paginado={paginado}

                    />
                    
                    <div className='flex justify-center'>
                        {currentCountries.length > 0 ? (
                            <div className='flex flex-row flex-wrap justify-center '>
                            {currentCountries.map((pais, index) => ( 
                                <Link to = {`/detail/${pais.id}`} key={index}>
                                    <Card name={pais.name} continent={pais.continent} image={pais.image}/>
                                </Link>
                            ))}
                            </div>
                        ) : (
                            <p>No se cargan países</p>
                        )}
                    </div>
        </div>
    )
}

export default Home