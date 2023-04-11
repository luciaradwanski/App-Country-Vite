import React from 'react'
import NavBar from './components/NavBar'
import Main from './views/Main';
import About from './views/About';
import Home from './views/Home';
import ActivityCreate from './views/ActivityCreate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<Main/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/activity' element={<ActivityCreate/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/detail/:id' element={<Detail/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        // <div>
        //     <NavBar/>
        //     <Main/>
        //     <About/>
        //     <Home/>
        // </div>
    )
}

export default App