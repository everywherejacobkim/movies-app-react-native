import React, { useState, useEffect } from 'react';
import { Box, Heading, ScrollView, HStack, Spinner } from 'native-base';
import TvShowList from '../components/TvShowList';
import { GET } from '../services/api';
import Category from '../components/Category';

const TvShows = () => {

    const [tvShows, setTvShows] = useState([]);
    const [category, setCategory] = useState('airing_today');
    const [isLoading, setLoading] = useState(true);

    const categoryOptions = ["airing_today", "on_the_air", "popular", "top_rated"];

    useEffect(() => {
        if (tvShows) {
            const getTvShows = async () => {
                const response = await GET(`/tv/${category}`);
                setTvShows(response.results);
            };
            getTvShows();
        }
        setLoading(false)
    }, [category]);

    return (
        isLoading ? (
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading results
                </Heading>
            </HStack>
            ) : (
            <ScrollView>
                <Category category={category} setCategory={setCategory} categoryOptions={categoryOptions}/>
                {tvShows.map((tvShow) => {
                    return <TvShowList key={tvShow.id} tvShow={tvShow} />
                })}
                <Box my={10}/>
            </ScrollView>
        
))};

export default TvShows;