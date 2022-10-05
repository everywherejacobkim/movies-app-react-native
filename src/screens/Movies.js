import React, { useState, useEffect } from 'react';
import { Box, Heading, ScrollView, HStack, Spinner } from 'native-base';
import MovieList from '../components/MovieList';
import { GET } from '../services/api';
import MovieCategory from '../components/MovieCategory';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('now_playing');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (movies) {
            const getNowPlayingMovies = async () => {
                const response = await GET(`/movie/${category}`);
                setMovies(response.results);
            };
            getNowPlayingMovies();
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
            <MovieCategory category={category} setCategory={setCategory}/>
            {movies?.map((movie) => {
                return <MovieList key={movie.id} movie={movie} />
            })}
            <Box my={10}/>
        </ScrollView>
        )
    )
};

export default Movies;