import React, { useState, useEffect } from 'react';
import { Box, Heading, ScrollView, HStack, Spinner } from 'native-base';
import MovieList from '../components/MovieList';
import { GET } from '../services/api';
import Category from '../components/Category';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('now_playing');
    const [isLoading, setLoading] = useState(true);

    const categoryOptions = ["now_playing", "popular", "top_rated", "upcoming"]

    useEffect(() => {
        if (movies) {
            const getMovies = async () => {
                const response = await GET(`/movie/${category}`);
                setMovies(response.results);
            };
            getMovies();
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
            {movies?.map((movie) => {
                return <MovieList key={movie.id} movie={movie} />
            })}
            <Box my={10}/>
        </ScrollView>
        )
    )
};

export default Movies;