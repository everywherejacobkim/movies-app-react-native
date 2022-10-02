import React, { useState, useEffect } from 'react';
import {Box, ScrollView } from 'native-base';
import TvShowList from '../components/TvShowList';
import { GET } from '../services/api';


const TvShows = () => {

    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const getAiringTvShows = async () => {
            const response = await GET('/tv/airing_today');
            setTvShows(response.results);
        };
        getAiringTvShows();
    }, []);
    console.log(tvShows);
    return (
        <ScrollView>
            {tvShows.map((tvShow) => {
                return <TvShowList key={tvShow.id} tvShow={tvShow} />
            })}
            <Box my={10}/>
        </ScrollView>
        
)};

export default TvShows;