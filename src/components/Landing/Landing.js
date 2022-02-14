import React from 'react'
import { Link } from 'react-router-dom'

import './landing.css'

export const LandingScreen = () => {
    return (
       
            <section className='grid'>
                <div className='grid__texts'>
                    <h2 className='grid__title'>Descubre mas de ellos</h2>
                    <button className='grid__button'><Link to='/marvel' className='grid__button--link'>Vamos..</Link></button>
                </div>
            </section>
    

    )
}
