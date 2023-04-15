import React from 'react'
import '../App.css'
import spinner from '../Assets/loading.gif'



const Spinner = () => {
    return (
        <img
        className='block m-auto w-96 h-64'
        src={spinner}
        alt='Loading'
        />
    )
}

export default Spinner
