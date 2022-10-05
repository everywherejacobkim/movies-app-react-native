import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, Image, Button } from 'native-base';
import { IMG_URL } from '../services/api_config';
import { useNavigation } from '@react-navigation/native';

const TvShowList = ({ tvShow }) => {
    const { name, poster_path, popularity, first_air_date } = tvShow;

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate('Details', {
            data: tvShow,
        });
    };

    return (
        <Box style={styles.container}>
            <Box>
                <Image source={{uri: IMG_URL + poster_path}} alt={name} size="xl" />
            </Box>
            <Box style={styles.infoWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Air Date: {first_air_date}</Text>
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

export default TvShowList;
