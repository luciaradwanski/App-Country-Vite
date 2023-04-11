import React from 'react'
import Perfil from '../assets/Perfil.jpg'
import NavBar from '../components/NavBar'

const About = () => {
    return (
        <div id='about' className='w-full'>
            <NavBar/>
            <div className='max-w-[1040px] m-auto md:pl-20 p-14 py-16 '>

                <h1 className='text-4xl font-bold text-center text-[#001b5e] hover:text-pink-700 '>About</h1>
                <div className='flex flex-row justify-evenly items-center content-center gap-20 w-full mt-20'>
                    
                    
                    
                    <p className='my-2 text-base font-normal text-stone-500 text-justify transition-all hover:scale-110 '>
                        <span>My name is Lucia Radwanski, I am a Full Stack Developer, I have a great ability to work in a team and consolidate web projects with the greatest enthusiasm. I have excellent technical skills like PostgreSQL, Express, Sequelize, Node JS, Next.js, Vite, Remix, React, Redux, Redux Toolkit, TypeScript, Styled Component, CSS, JavaScript, and also soft skills like Initiative, Resilience, Self Confidence, Empathy, Persuasion, Versatility, Curiosity, Teamwork, Problem solving. I have a desire to learn and help every day in the workplace, thus strengthening all my skills as a Full Stack Developer. I worked as a student of the Full Stack Developer career at Soy Henry, there I learned previously mentioned technical skills, both for Back-end and Front-end, as well as some Frameworks and libraries. If you want to know more about me, don't hesitate to contact me! </span> 
                        <span>
                        Countries App is a SPA (Single Page Application) with the theme of countries, which was developed during the Herny Bootcamp. The App is available on the {" "} <a href="https://github.com/luciaradwanski/PI-Countries-main" className='text-[#001b5e] font-bold'>GitHub{" "}</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About