import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, Image } from 'native-base';
import { IMG_URL } from '../services/api_config';

const MovieList = ({ movie }) => {
    const { id, title, poster_path, popularity, release_date } = movie;

    return (
        <Box>
            <Box>
                <Image source={{uri: IMG_URL + poster_path}} alt={title} size="xl" />
            </Box>
            <Box>
                <Text>{title}</Text>
            </Box>
        </Box>
    );
}

export default MovieList;
