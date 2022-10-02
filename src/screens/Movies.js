import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { GET } from '../services/api';


const Movies = () => {

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const response = await GET('/movie/now_playing');
            console.log(response);
        };
        getNowPlayingMovies();
    }, []);

    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
            Movie
        </Text>
    </View>
)};

export default Movies;