import React from 'react';
import { Box, FormControl, Input } from 'native-base';

const SearchName = ({query, setQuery}) => {
    return (
        <Box mt={5}>
            <FormControl w="3/4" maxW="300" isRequired isInvalid>
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <Input placeholder="i.e. James Bond, CSI" w="100%" value={query} onChangeText={(text) => setQuery(text)}/>
            </FormControl>
        </Box>
    );
}

export default SearchName;
