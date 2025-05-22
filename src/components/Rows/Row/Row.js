import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const base_url = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovie(request.data.results);
            } catch (error) {
                console.log('error', error);
            }
        })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.original_name || movie?.name || '')
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    console.log(urlParams.get('v'));
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((err) => console.log('Trailer not found', err));
        }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoPlay: 1,
        },
    };

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies?.map((movie, index) => {
                    const imagePath = isLargeRow ? movie?.poster_path : movie?.backdrop_path;
                    if (!imagePath) return null; // Skip if no image path
                    return (
                        <img
                            onClick={() => handleClick(movie)}
                            key={index}
                            src={`${base_url}${imagePath}`}
                            alt={movie?.name || movie?.title || 'Movie'}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        />
                    );
                })}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
};

export default Row;

