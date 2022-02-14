import React from 'react'
import { HeroList } from '../hero/HeroList'


export const MarvelScreen = () => {
    return (
        <div className='hero'>
            <h1>Marvel Heroes</h1>
            <hr/>
            <HeroList publisher={'Marvel Comics'} />
        </div>
    )
}
