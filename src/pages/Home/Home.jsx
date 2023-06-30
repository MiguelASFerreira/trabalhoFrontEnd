import { useCallback, useEffect, useState } from 'react'
import CardAnime from '../../components/CardAnime/CardAnime'
import CardMangas from '../../components/CardMangas/CardMangas'
import axios from 'axios'
import './Home.css'
import Spinner from '../../components/Spinner/Spinner'

const Home = () => {
  const [topAnime, setTopAnime] = useState([])
  const [topMangas, setTopMangas] = useState([])

  const fetchAnime = useCallback(async () => {
    try {
      const { data } = await axios.get("https://api.jikan.moe/v4/top/anime")
      setTopAnime(data.data);
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchAnime()
  },[fetchAnime])

  const fetchManga = useCallback(async () => {
    try {
      const { data } = await axios.get("https://api.jikan.moe/v4/top/manga")
      setTopMangas(data.data)
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    fetchManga()
  },[fetchManga])

  return (
    <div>
      <div>
        <h3 className="top">
              Top Animes
        </h3>
        <section className='sectionTop'> 
          {topAnime.length === 0 && <Spinner />}
          {topAnime.length > 0 && topAnime.map((anime) => {
            return <CardAnime key={anime.mal_id} card={anime} />
          })}
        </section>
      </div>
      <div>
        <h3 className="top">
              Top Mangás
        </h3>
        <section className='sectionTop'>
          {topMangas.length === 0 && <Spinner />} 
          {topMangas.length > 0 && topMangas.map((mangas) => {
            return <CardMangas key={mangas.mal_id} card={mangas} />
          })}
        </section>
      </div>
    </div>
  )
}

export default Home