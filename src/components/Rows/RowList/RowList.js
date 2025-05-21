import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
    return (
        <div>
            <Row 
                title='NETFLIX ORIGINAL'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRatedMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
            <Row title='TV Shows' fetchUrl={requests.fetchTvShow}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    );
}

export default RowList;
