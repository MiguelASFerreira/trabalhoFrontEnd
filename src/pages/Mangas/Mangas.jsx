import axios from 'axios'
import {useState, useCallback, useEffect} from 'react'
import Spinner from '../../components/Spinner/Spinner'
import CardManga from '../../components/CardMangas/CardMangas'

import './Mangas.css'

const Mangas = () => {
  const [manga, setManga] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchManga = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://api.jikan.moe/v4/manga?page=${page}`)
      setManga(data.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchManga()
  },[fetchManga])

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
    <div className='sectionManga'>
        {loading && <Spinner />}
        {!loading && manga.length === 0 && <p>Nenhum manga encontrado.</p>}
        {!loading && manga.length > 0 && manga.map((manga) => {
          return <CardManga key={manga.mal_id} card={manga}/>
        })}
        {!loading && <div className='paginacao'>
            <button onClick={handlePreviousPage}>Anterior</button>
            <h3>{page}</h3>
            <button onClick={handleNextPage}>Proximo</button>
        </div>}
    </div>
  )
}

export default Mangas