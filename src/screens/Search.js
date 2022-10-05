import React, { useState } from 'react';
import { Box, Center, ScrollView } from 'native-base';
import SearchName from '../components/SearchName';
import SearchType from '../components/SearchType';
import SearchList from '../components/SearchList';
import { API_KEY } from '../services/api_config';

const Search = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchType, setSearchType] = useState([]);
    const [query, setQuery] = useState([]);

    const handleQuery = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=${API_KEY}&query=${query}`)
        const data = await response.json();
        setSearchResult(data.results);
    }

    return (
    <Center>
        <SearchName query={query} setQuery={setQuery}/>
            <SearchType setSearchType={setSearchType} handleQuery={handleQuery}/>
        <ScrollView mt={5}>
            {searchResult?.map((result) => {
                return <SearchList key={result.id} result={result} />
            })}
            <Box my={10}/>
        </ScrollView>
    </Center>

)};

export default Search;