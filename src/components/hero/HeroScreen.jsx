import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById'

export const HeroScreen = () => {

    const {heroId}= useParams()
    const navigate = useNavigate()

    const hero= getHeroById(heroId)

    const handleReturn = () => {

        navigate(-1)

    }

    if(!hero){
       return  <Navigate to='/marvel'/>
    }

    const imagePath = `/assets/${hero.id}.jpg`;

    return (
        <div className='row mt-2'>
            <div className='col-4'>

                <img src={imagePath} alt={hero.superhero} className='img-thumbnail animate__animated animate__backInDown'/>

            </div>
        <div className='col-8 animate__animated animate__fadeIn'>

            <h3>{hero.superhero}</h3>

            <ul className='list-group list-group-flush'>

                <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                <li className='list-group-item'><b>Publicado por: </b>{hero.publisher}</li>
                <li className='list-group-item'><b>Por primera vez en: </b>{hero.first_appearance}</li>

            </ul>

            <h5 className='mt-3'>Personaje</h5>
            <p>{hero.characters}</p>

            <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>

        </div>
        </div>
    )
}
