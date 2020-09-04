import React, { createContext, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export const Context = createContext();
export const DataCenter = (props) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const getName = (name) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(name)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            console.log(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };

    return (
      <div>
        <Context.Provider value={{ getName }}>
          {props.children}
        </Context.Provider>
      </div>
    );
}

 
