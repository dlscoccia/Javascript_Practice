import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieDetails.module.css'
import { AiFillStar } from 'react-icons/ai';

function MovieDetails() {
    const { id } = useParams();
    const [movieFilm, setMovieFilm] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + id, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then((result) => result.json()).then(data => {
            setMovieFilm(data)
        })
    }, [id])

    const imageUrl = `https://image.tmdb.org/t/p/w300${movieFilm.poster_path}`;
    return (
        <div className={style.detailsPage}>
            <img src={imageUrl} alt={movieFilm.title} />
            <div>
                <p className={style.detailsTitle}>
                    <strong>Title:</strong> {movieFilm.title}
                </p>
                <p className={style.detailsPopularity}>
                    <strong>Popularity:</strong> {movieFilm.popularity} <AiFillStar />
                </p>
                <p className={style.detailsDescription}>
                    <strong>Description:</strong> {movieFilm.overview}
                </p>
            </div>
        </div>
    )
}

export default MovieDetails