import React from 'react'

import { useTheme } from 'styled-components'
import { Container } from './styles'
import { Props } from './types'

export default function Text({type="regular", size = 14, color, children, ...rest}: Props) {

    const {colors} = useTheme();

    return (
        <Container 
            type={type} 
            size={size} 
            color={color|| colors.background.onMain} 
            {...rest}
        >{children}</Container> 
    )
}