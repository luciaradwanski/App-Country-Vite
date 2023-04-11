import React from 'react'

const Paginado = ({charactersPerPage, paises, paginado}) => {
    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(paises/charactersPerPage);i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className='text-center pt-2 mb-2'>
            <ul className='inline-block p-0 m-0 bg-black'>
                {pageNumbers && pageNumbers.map(number => (
                    <li className='inline' key={number}>
                        <a className='text-white float-left px-2 py-1 no-underline transition duration-300 border border-white border-opacity-30  hover:bg-pink-700 hover:text-black' onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado