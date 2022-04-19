import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

export default function App(){

    const {typography} = useTheme()
    return (
        <Container>
            <Text style={{
                fontSize: 24,
               fontFamily: typography.bold.fontFamily,
               letterSpacing: typography.bold.letterSpacing, 
            }}>Hello World</Text>
        </Container>
    )
}