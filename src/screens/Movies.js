import React, { useState, useEffect } from 'react';
import { Box, Text, ScrollView } from 'native-base'
import MovieList from '../components/MovieList';
import { GET } from '../services/api';



const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const response = await GET('/movie/now_playing');
            setMovies(response.results);
        };
        getNowPlayingMovies();
    }, []);

    return (
    <ScrollView>
            {movies.map((movie) => {
                return <MovieList key={movie.id} movie={movie} />
            })}
            <Box my={10}/>
    </ScrollView>
)};

export default Movies;