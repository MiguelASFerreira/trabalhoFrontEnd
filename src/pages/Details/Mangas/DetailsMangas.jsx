import { useCallback, useEffect, useState } from 'react'
import './DetailsMangas.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { formatDataManga } from '../../../components/CardMangas/DataManga';

const DetailsMangas = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);

  const fetchManga = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`)
      setManga(data.data)
    } catch (error) {
      console.log(error)
    }
  },[id])

  useEffect(() => {
    fetchManga()
  },[fetchManga])

  const { getFormattedStartDate, getFormattedEndDate } = formatDataManga(manga);
  return (
    <div>
      {manga &&
        <>
          <div className='manga'>
            <div>
              <img src={manga.images.jpg.image_url} alt={manga.mal_id} />
              <h1 className='title'>{manga.title}</h1>
              <p className='data'> Data de Lançamento: {getFormattedStartDate()}</p>
              <p className='data'> Data de Encerramento: {getFormattedEndDate()}</p>
            </div>
            <div className='details'>
              <h3>{manga.synopsis}</h3>
              {manga.chapters !== null && manga.volumes !== null && (
              <>
                <p>-----------------------------------------------------------------------------------------------------------------------------------------</p><div>
                  <h3>Capitulo: {manga.chapters}</h3>
                  <h3>Volumes: {manga.volumes}</h3>
                </div>
              </>
            )}
            <p>-----------------------------------------------------------------------------------------------------------------------------------------</p>
              
              <h3>Gêneros</h3>
              <div className='generos'>
                {manga.genres.map((genre) => {
                  return <p key={genre.name} className='genre'>{genre.name}</p>
                })}
              </div>
              {manga.themes && manga.themes.length > 0 && (
              <>
                <p>-----------------------------------------------------------------------------------------------------------------------------------------</p>
                <h3>Temas</h3>
                <div className='generos'>
                  {manga.themes.map((theme) => {
                    return <p key={theme.name} className='genre'>{theme.name}</p>;
                  })}
                </div>
              </>
            )}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default DetailsMangas