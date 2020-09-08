import React,{useState,useEffect,useContext} from 'react';
import axios from './axios';
import './row.css'
import movieTrailer from 'movie-trailer';
import {Link} from 'react-scroll';
import { Context } from "./DataCenter";

const base_url = "https://image.tmdb.org/t/p/original/"
const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const { getName } = useContext(Context);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

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
  if (!movies)
    return ''

    return (
      <div className="row" id="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map(
            (movie) =>
              movie.backdrop_path && (
                <Link
                  onClick={() =>
                    getName(movie?.title || movie?.name || movie?.origina_name)
                  }
                  to={isLargeRow ? "" : "row"}
                  smooth={true}
                  duration={1000}
                >
                  <img
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  ></img>
                </Link>
              )
          )}
        </div>
      </div>
    );
}

export default Row;
