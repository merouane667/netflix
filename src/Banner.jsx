import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css';
import { Link } from "react-router-dom";
import { Context } from './DataCenter';

const Banner = () => {
    const [movie , setMovie] = useState([]);
    const {getName} = useContext(Context);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchHorrorMovies);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, []);
    
    function truncate(str,n ){
        return str?.length > n ? str.substr(0, n-1) + '...' : str ;
    }
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
            )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.origina_name}
          </h1>
          <div className="banner_buttons">
            <a  onClick={()=>getName((movie?.title || movie?.name || movie?.origina_name))} className="banner_button">Play</a>
            <a className="banner_button">My List</a>
          </div>
          <h1 className="banner_description" >
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner-fadeBottom" id="bottom"></div>
      </header>
    );
}

export default Banner;
