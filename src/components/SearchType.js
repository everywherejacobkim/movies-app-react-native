import React from 'react';
import { Box, Text, Select, HStack, Button, FormControl } from 'native-base';
import { Ionicons } from '@expo/vector-icons';


const SearchType = ({ setSearchType, handleQuery }) => {
    
    return (
        <Box mt={5}>
            <FormControl w="3/4" maxW="300" isRequired isInvalid>
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <HStack>
                    <Select minWidth="180" onValueChange={itemValue => setSearchType(itemValue)}>
                        <Select.Item label="Movie" value="movie" />
                        <Select.Item label="Multi" value="multi" />
                        <Select.Item label="TV" value="tv" />
                    </Select>
                    <Button ml={7} p={1} width={100} onPress={() => handleQuery()}>
                        <HStack>
                            <Ionicons name="ios-search" size={18} color="white" />
                            <Text color="white" fontWeight={500} ml={1}>Search</Text>
                        </HStack>
                    </Button>
                </HStack>
                <FormControl.ErrorMessage leftIcon={<Ionicons name="warning-outline" size={14} color="red" />}>
                    Please select a search type
                </FormControl.ErrorMessage>
            </FormControl>
        </Box>
    );
}

export default SearchType;
