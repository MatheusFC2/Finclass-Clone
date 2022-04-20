import React, { Component } from 'react'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

import Text from './components/Text'

export default function App(){

    const {typography} = useTheme()
    
    return (
        <Container>
            <Text>Hello</Text>
        </Container>
    )
}