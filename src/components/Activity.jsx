import React from 'react'

const Activity = ({name, difficulty, duration, season}) => {
    return (
        <div className='bg-[#B5E5F6] text-white rounded-2xl p-10 '>
            <h3 className='text-center mb-8 uppercase'><b>{name}</b></h3> 
            <div className='w-full  flex justify-between items-end gap-6'>
                <h4 className='text-base sm:text-lg md:text-xl lg:text-2xl'>{difficulty}°</h4>
                <h4 className='text-base sm:text-lg md:text-xl lg:text-2xl'>{duration} hs</h4>
                <h4 className='text-base sm:text-lg md:text-xl lg:text-2xl'>{season}</h4>
            </div>     
            
        </div>
    )
}

export default Activity