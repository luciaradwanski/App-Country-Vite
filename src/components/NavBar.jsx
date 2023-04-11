import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineLocalActivity} from 'react-icons/md'

// export default function NavBar() {
//     const [nav, setNav] = useState(false)
//     const handleNav = () => {
//         setNav(!nav)
//     }
//     return (
//         <div>
//             <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
//             { nav ? (
//                 <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
//                     <a href="#main" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                         <AiOutlineHome size={20}/>
//                         <span className='pl-4'>Home</span>
//                     </a>
//                     <a href="#card" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                         <AiOutlineProject size={20}/>
//                         <span className='pl-4'>Countries</span>
//                     </a>
//                     <a href="#about" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                         <BsPerson size={20}/>
//                         <span className='pl-4'>About</span>
//                     </a>
//                     <a href="#createactivity" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                         <GrProjects size={20}/>
//                         <span className='pl-4'>Work</span>
//                     </a>
//                     <a href="#contact" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                         <AiOutlineMail size={20}/>
//                         <span className='pl-4'>Contact</span>
//                     </a>
//                 </div>
//             ) : (
//                 ''
//             )}

//             <div className='md:block hidden fixed top-[25%]'>
//                 <div className='flex flex-col'>
//                     <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <AiOutlineHome size={20}/>
//                     </a>
//                     <a href="#card" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <AiOutlineProject size={20}/>
//                     </a>
//                     <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <BsPerson size={20}/>
//                     </a>
//                     <a href="#createactivity" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <GrProjects size={20}/>
//                     </a>
//                     <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
//                         <AiOutlineMail size={20}/>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }


import { Link } from 'react-router-dom'
export default function NavBar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            { nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <Link to="/home" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </Link>
                    <Link to="/about" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20}/>
                        <span className='pl-4'>About</span>
                    </Link>
                    <Link to="/activity" className='w-[75%] flex justify-center content-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <MdOutlineLocalActivity size={20}/>
                        <span className='pl-4'>Create Activity</span>
                    </Link>
                </div>
            ) : (
                ''
            )}

            <div className='md:block hidden fixed top-[25%]'>
                <div className='flex flex-col'>
                    <Link to="/home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </Link>
                    <Link to="/about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                    </Link>
                    <Link to="/activity" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <MdOutlineLocalActivity size={20}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
