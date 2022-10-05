import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Center, Box, Select } from "native-base";
import { Ionicons } from '@expo/vector-icons';

const MovieCategory = ({category, setCategory}) => {
    return (
        <Center>
            <Box maxW="300" mt={5} mb={2}>
                <Select selectedValue={category} minWidth="200" accessibilityLabel="Choose Category" placeholder="Choose Category" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <Ionicons name="checkmark" size={24} color="white" />
            }} mt={1} onValueChange={itemValue => setCategory(itemValue)}>
                <Select.Item label="now_playing" value="now_playing" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="top_rated" value="top_rated" />
                <Select.Item label="upcoming" value="upcoming" />
        </Select>
            </Box>
        </Center>
    );
}

const styles = StyleSheet.create({})

export default MovieCategory;
