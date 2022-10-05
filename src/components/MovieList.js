import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, Image, Button } from 'native-base';
import { IMG_URL } from '../services/api_config';
import { useNavigation } from '@react-navigation/native';

const MovieList = ({ movie }) => {
    const { title, poster_path, popularity, release_date } = movie;

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate('Details', {
            data: movie,
        });
    };

    return (
        <Box style={styles.container}>
            <Box>
                <Image source={{uri: IMG_URL + poster_path}} alt={title} size="xl" />
            </Box>
            <Box style={styles.infoWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date: {release_date}</Text>
                <Button small primary style={styles.btn} onPress={goToDetail}>
                    <Text style={styles.btnText}>More Details</Text>
                </Button>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
    },
    infoWrapper: {
        width: '55%',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    title: {
        fontWeight: '600',
    },
    btn: {
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
    }

})

export default MovieList;
