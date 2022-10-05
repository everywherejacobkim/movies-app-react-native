import React from 'react';
import { Center, Box, Select } from "native-base";
import { Ionicons } from '@expo/vector-icons';

const Category = ({category, setCategory, categoryOptions}) => {
    return (
        <Center>
            <Box maxW="300" mt={5} mb={2}>
                <Select selectedValue={category} minWidth="200" accessibilityLabel="Choose Category" placeholder="Choose Category" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <Ionicons name="checkmark" size={24} color="white" />
                }} mt={1} onValueChange={itemValue => setCategory(itemValue)}>
                    {categoryOptions.map((option, i) => (
                        <Select.Item key={i} label={option} value={option} />
                    ))}
        </Select>
            </Box>
        </Center>
    );
}

export default Category;
