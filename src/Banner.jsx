import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css';
import { Link } from "react-scroll";
import { Context } from './DataCenter';
import YouTube from "react-youtube";

const Banner = () => {
    const [movie , setMovie] = useState([]);
    const {getName} = useContext(Context);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, []);
    
    function truncate(str,n ){
        return str?.length > n ? str.substr(0, n-1) + '...' : str ;
    }
    const { trailerUrl } = useContext(Context);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
    };
    return (
      <div>
        <header
          className="banner"
          id="banner"
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
              <Link
                onClick={() =>
                  getName(movie?.title || movie?.name || movie?.origina_name)
                }
                className="banner_button"
                to='youtube'
                smooth={true}
                duration={1000}
              >
                Play
              </Link>
              <Link
                className="banner_button"
                to="youtube"
                smooth={true}
                duration={1000}
              >
                List
              </Link>
            </div>
            <h1 className="banner_description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner-fadeBottom" id="bottom"></div>
        </header>
        <p id="youtube"> </p>
        {trailerUrl && (
          <div className="youtube">
            <YouTube videoId={trailerUrl} opts={opts} />
            <Link
              className="btn btn-secondary"
              onClick={() =>
                getName(movie?.title || movie?.name || movie?.origina_name)
              }
              style={{ color: "white", float: "right" }}
              to="banner"
              smooth={true}
              duration={1000}
              title="fermer la video"
            >
              <i className="fa fa-chevron-up"></i>
            </Link>
          </div>
        )}
      </div>
    );
}

export default Banner;
