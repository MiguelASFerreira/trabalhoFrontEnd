/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom'
import './CardMangas.css'

const CardMangas = ({card}) => {
  return (
    <Link to={`/manga/${card.mal_id}`} className='card'>
        <img className='imgAnime' src={card.images.jpg.image_url} alt={card.mal_id} />
        <h2 className='title'>{card.title}</h2>
    </Link>
  )
}

export default CardMangas