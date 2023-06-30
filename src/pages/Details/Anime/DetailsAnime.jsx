import { useCallback, useEffect, useState } from 'react'
import './DetailsAnime.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Faixa from '../../../components/Faixa/Faixa';
import Duration from '../../../components/Duration/Duration';
import Season from '../../../components/Season/Season';
import { formatDataAnime } from '../../../components/CardAnime/DataAnime';

const DetailsAnime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null)

  const fetchAnime = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
      setAnime(data.data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    fetchAnime()
  },[fetchAnime])

  
  const { getFormattedStartDate, getFormattedEndDate } = formatDataAnime(anime);
  return (
    <div>
      {anime && 
        <>
          <div className='anime'>
            <div>
              <img src={anime.images.jpg.image_url} alt={anime.mal_id} />
              <h1 className='title'>{anime.title}</h1>
              <p className='data'> Data de Lançamento: {getFormattedStartDate()}</p>
              <p className='data'> Data de Encerramento: {getFormattedEndDate()}</p>
              <Season season={anime.season}/>
            </div>
            <div className='details'>
              <h3>{anime.synopsis}</h3>
              <p>-----------------------------------------------------------------------------------------------------------------------------------------</p>
              <h3>Gêneros</h3>
              <div className='generos'>
                {anime.genres.map((genre) => {
                  return <p key={genre.name} className='genre'>{genre.name}</p>
                })}
              </div>
              <p>-----------------------------------------------------------------------------------------------------------------------------------------</p>
              <h3>Duração</h3>
              <Duration duration={anime.duration}/>
              <p>-----------------------------------------------------------------------------------------------------------------------------------------</p>
              <h3>Episódios</h3>
              {anime.episodes === null ? <p>Em lançamento</p> : <p>{anime.episodes} episódios</p>}
            </div>
            <Faixa faixa={anime.rating}/>
          </div>
        </>
      }
    </div>
  )
}

export default DetailsAnime