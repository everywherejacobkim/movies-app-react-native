import React from 'react'
import { Box, HStack, StatusBar, Text } from 'native-base'

const Header = () => (
    <>
        <StatusBar barStyle='light-content'/>
            <Box safeAreaTop backgroundColor='#1d3557'>
                <HStack bg='#1d3557' px={1} py={2} alignItems='center' justifyContent='center'>
                    <Text color='#fff' fontSize={20} fontWeight={600}>Movies App</Text>
                </HStack>
            </Box>    
    </>
)

export default Header