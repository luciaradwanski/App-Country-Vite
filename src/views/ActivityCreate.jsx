import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import swal from 'sweetalert';
import { getDataCountries } from '../store/countries/countriesSlice';

const validate = (input) => { //regex - y + que no se pueda 
    let error = {};
    if(!/[A-Za-z0-9]/.test(input.name)){
        error.name = 'El nombre admite solo letras, numeros y espacios'     
    }if(!input.name){
        error.name = 'Debe ingresar un nombre'
    }if(!input.difficulty){
        error.difficulty = 'Debe ingresar un valor entre 1 y 5'
    }if(input.difficulty<1 || input.difficulty>5){
            error.difficulty = 'Debe ingresar un valor entre 1 y 5'
    }if(!input.duration){
        error.duration = 'Debe ingresar la duración en horas'
    }if(input.duration<0 || input.duration>24){
        error.duration = 'La duración debe ser de 1 a 24 horas'
    }if(!input.season){
        error.season = 'Debe seleccionar una temporada'
    }if(input.paises.length === 0){
        error.paises = 'Debe seleccionar al menos un país'    
    }
    return error;
}

export default function ActivityCreate(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const countries = useSelector((state) => state.paises.countries)
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: '',
        difficulty: 0,
        duration: 0,
        season: '',
        paises: [],
    })


    const handleChange = (e) => {
        setError(validate({
            ...input, 
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        });
        console.log(input)
    }

    const handleSelect = (e) => {
        setInput({ ...input, paises: [...input.paises, e.target.value]})
        setError(validate({ ...input, paises: [...input.paises, e.target.value]}))  
    }

    const handleSubmit = (e) => {

        if(!input.name && !input.difficulty & !input.duration && !input.season && !input.paises.length) {
            return swal('"Oh noes!"', "The AJAX request failed!", "error")
        } else {

            e.preventDefault()
            console.log(input)
            setError(validate({...input, [e.target.name]: e.target.value}));
            dispatch(postActivity(input))
            swal("Created Activity", "You clicked the button!", "success")
                            
            setInput({
                name:"",
                difficulty: 0,
                duration: 0,
                season:"",
                paises: []
            })
            navigate('/home')                   
        }
    }

    const handleDelete = (e) => {
        setInput({ ...input, paises: input.paises.filter(c => c!==e)})
        
    }

    useEffect(() => {
        dispatch(getDataCountries())
    },[dispatch])

    return(
        
            <div className=' w-full h-800 '>
                <NavBar/>

                <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                    <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] hover:text-pink-700'>Create Activity</h1>
                    <div className='flex flex-col justify-between items-center content-center w-full'>
                        <form  onSubmit={(e) => handleSubmit(e)}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={input.name} name='name' onChange={(e) => handleChange(e)}></input>                            
                                    {error.name && (<p className='text-red-500 font-bold text-xs mb-5 absolute mt-24'>{error.name}</p>)}
                                </div>
                                
                                        
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Difficulty</label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type='text' value={input.difficulty} name = 'difficulty' min='1' max='5' onChange={(e) => handleChange(e)}></input>                            
                                    {error.difficulty && (<p className='text-red-500 font-bold text-xs mb-5 absolute mt-24'>{error.difficulty}</p>)}
                                </div>
                            </div>
                            

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Duration</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='number' value={input.duration} name = 'duration' onChange={(e) => handleChange(e)}></input>                            
                                {error.duration && (<p className='text-red-500 font-bold text-xs mb-5 absolute mt-24'>{error.duration}</p>)}
                            </div>
                                
                                    
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Season</label>
                                <select className='border-2 rounded-lg p-3 flex border-gray-300' name='season' onChange={(e) => handleChange(e)}>
                                    <option value=''>All</option>
                                    <option value={"Verano"}>Verano</option>
                                    <option value={"Otoño"}>Otoño</option>
                                    <option value={"Invierno"}>Invierno</option>
                                    <option value={"Primavera"}>Primavera</option>
                                </select>
                                {error.season && (<p className='text-red-500 font-bold text-xs mb-5 absolute mt-24'>{error.season}</p>)}
                            </div>
                            
                            
                            <div className='flex flex-col py-2'>

                                <label className='uppercase text-sm py-2'>Countries</label>
                                <select className='border-2 rounded-lg p-3 flex border-gray-300' name='paises' onChange={e=>handleSelect(e)}>
                                    
                                    {countries && countries.length > 0 && countries.map((c, index)=>( 
                                        <option key={index} value={c.id}>{c.name}</option>  //ordenar por orden alfabetico
                                    ))}
                                </select>    
                                {error.paises && (<p className='text-red-500 font-bold text-xs mt-24 mb-5 absolute '>{error.paises}</p>)}
                            </div>

                            {input.paises.length === 0 && 
                                <div className='flex flex-row justify-center items-center gap-6 '>
                                    <ul className='rounded-2xl w-250 h-20 bg-gray-800'><li className=''>{input.paises.map(el => el + " ,")}</li></ul>                        
                                </div>
                            }
                            
                            <button className='text-gray-100 bg-[#001b5e] rounded-md mt-4 w-full p-4 hover:bg-pink-700 justify-between' type="submit">
                                Create
                            </button>
                                
                        </form>
                    </div>
                    
                    <div>
                        {input.paises.map((e) => (
                            <ul className='rounded-2xl w-250 h-20 bg-gray-800'><h4>{e}</h4><button className='bg-gray-800 rounded-2xl w-50 h-20 text-white p-20' onClick={()=>handleDelete(e)}>X</button></ul>                          
                        ))}               
                    </div>
                </div>
                
                
            </div>

            
    )
}