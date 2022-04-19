import { fonts } from './src/styles/fonts';
import { useFonts } from 'expo-font' 

import { theme } from './src/styles/theme'
import { ThemeProvider } from 'styled-components/native'
import App from './src';

export default function Main() {

    const [fontsLoaded] = useFonts(fonts)

    if(!fontsLoaded) return null;

    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
}