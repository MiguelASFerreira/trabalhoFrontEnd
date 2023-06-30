import axios from 'axios'
import {useState, useCallback, useEffect} from 'react'
import Spinner from '../../components/Spinner/Spinner'
import CardAnime from '../../components/CardAnime/CardAnime'

import './Animes.css'

const Animes = () => {
  const [anime, setAnime] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchAnime = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`)
      setAnime(data.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchAnime()
  },[fetchAnime])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  const handlePreviousPage = () => {
    if (page === 1) {
      setPage(1)
    } else {
        setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page === 20) {
      setPage(20)
    } else {
        setPage(page + 1)
    }
  }

  return (
    <div className='sectionAnime'>
        {loading && <Spinner />}
        {!loading && anime.length === 0 && <p>Nenhum anime encontrado.</p>}
        {!loading && anime.length > 0 && anime.map((anime) => {
          return <CardAnime key={anime.mal_id} card={anime} />
        })}
        {!loading && <div className='paginacao'>
            <button onClick={handlePreviousPage}>Anterior</button>
            <h3>{page}</h3>
            <button onClick={handleNextPage}>Proximo</button>
        </div>}
    </div>
  )
}

export default Animes