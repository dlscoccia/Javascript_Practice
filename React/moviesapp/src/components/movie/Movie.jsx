import React from 'react'
import style from './Movie.module.css'
import { Link } from 'react-router-dom'
import MovieInfo from './MovieInfo';

function Movie({ title, img, id, date, vote }) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${img}`;
    return (
        <Link to={`/movie/${id}`}>
            <li className={style.movieCard}>
                <img className={style.img} src={imageUrl} alt={title} />
                <h2 className={style.title}>{title}</h2>
                <MovieInfo date={date} vote={vote} />
            </li>

        </Link>
    )
}

export default Movie