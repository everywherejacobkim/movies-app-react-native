import React from 'react';
import { View } from 'react-native';
import { Box, Image, Text, ScrollView } from 'native-base';
import { IMG_URL } from '../services/api_config';

const Details = ({route}) => {

    const {title, name, poster_path, overview, popularity, release_date, first_air_date} = route.params.data;

    return (
        <ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center", margin: 35 }}>
                <Box>
                    <Text mb={5} fontWeight={600} fontSize="xl">
                            {name}{title}
                    </Text>     
                </Box>
                <Box>
                    <Image source={{uri: IMG_URL + poster_path}} alt={overview} size="2xl" />
                </Box>
                <Box>
                    <Text mt={5}>
                        {overview}
                    </Text>
                </Box>
                <Box>
                    <Text mt={5}>
                        Popularity: {popularity} | Release Date: {release_date}{first_air_date}
                    </Text>    
                </Box>
            </View>
        </ScrollView>
)};

export default Details;