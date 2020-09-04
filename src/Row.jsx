import React,{useState,useEffect} from 'react';
import axios from './axios';
import './row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {Link} from 'react-scroll';

const base_url = "https://image.tmdb.org/t/p/original/"
const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    const handleClick = (movie)=>{
        if (trailerUrl) {
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || "" )
            
            .then((url) =>{
              
                const urlParams = new URLSearchParams(new URL(url).search) ;
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) =>console.log(error))
        }
    }

    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map(
            (movie) =>
              movie.backdrop_path && (
                <a>
                  <img
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  ></img>
                </a>
              )
          )}
        </div>
        {/* {isLargeRow && trailerUrl && (
          <YouTube videoId={trailerUrl} opts={opts} id="youtube" />
        )} */}
      </div>
    );
}

export default Row;
