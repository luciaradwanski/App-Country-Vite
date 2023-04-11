import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

export default function Card({name, image, continent}){
    return (
        <div className='w-[300px] h-[300px] rounded-8 shadow-md overflow-hidden m-20 text-center transition-all duration-250 bg-black text-white hover:-translate-y-1 hover:shadow-lg pt-6  rounded-lg '>
            <h2 className='font-semibold pb-6'>{name}</h2>
            <img className='w-[300px] h-[170px]' src={image} alt='img not found' />
            <div className='flex flex-row justify-center items-center gap-6 mt-4'>
                <FaMapMarkerAlt className='animate-ping'/>
                <h3 className='font-medium'>{continent}</h3>
            </div>   
        </div>
    )
}

