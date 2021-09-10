import React, { useEffect, useState } from 'react';
import Movie from '../movie/Movie';
import style from './MoviesGrid.module.css'
import { get } from '../../utils/httpClient'

function MoviesGrid() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        get('/discover/movie').then((data) => {
            setMovies(data.results)
        })
    }, [])
    

    return (
        <>
        <button onClick={() => console.log('click')}>Filter</button>
        <ul className={style.moviesList}> {movies.map(movie => <Movie title={movie.title} id={movie.id} img={movie.poster_path} date={movies.release_date} vote={movie.vote_average} />)}
        </ul>
        </>)
}
export default MoviesGrid