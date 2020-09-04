import React, { useContext } from 'react';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


const Home = () => {


          return (
            <div>
              <Nav />
              <Banner />

              <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow
              />

              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
              />
              <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
              />
              <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
              />

              <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
              />

              <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
              />
            </div>
          );
}

export default Home;
