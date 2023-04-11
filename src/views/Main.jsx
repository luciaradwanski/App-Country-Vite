import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <img className='w-full h-screen object-cover object-left ' src="https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center log:items-start items-center content-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Welcome to my Countries App</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>Countries have 
                        <TypeAnimation
                            sequence={[
                                'culture', // Types 'One'
                                2000, // Waits 1s
                                'activities', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'creativity', // Types 'Three' without deleting 'Two'
                                2000
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px'}}
                        />
                    </h2>
                    <div className='flex justify-between items-center content-center flex-wrap pt-6 max-w-[500px] w-full'>
                        <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300' href="https://twitter.com/LuciaRadwanski"><FaTwitter className='cursor-pointer' size={20}/></a>
                        <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.facebook.com/profile.php?id=100087048003032"><FaFacebookF className='cursor-pointer' size={20}/></a>
                        <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.instagram.com/luradwanski/"><FaInstagram className='cursor-pointer' size={20}/></a>
                        <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/lu-radwanski/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
                        <a className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300' href="https://github.com/luciaradwanski"><FaGithub className='cursor-pointer' size={20}/></a>
                    </div>
                    <Link to='/home'>
                        <button className='rounded-full shadow-lg bg-gray-800 shadow-gray-400 text-[white] m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>Get Into</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main