import { DefaultTheme } from "styled-components/native";
import { appFonts } from '../styles/fonts'
import appColors from "./colors";
 
export const theme: DefaultTheme = {
    typography: {
        regular: {
            fontFamily: appFonts.regular,
            letterSpacing: 0,
        },
        
        semiBold: {
            fontFamily: appFonts.semiBold,
            letterSpacing: 0,
        },

        bold: {
            fontFamily: appFonts.bold,
            letterSpacing: 0,
        },
    },
    colors: {
        primary: {
            main: appColors.brand01,
            onMain: appColors.neutralLightest
        },
        // Cortina de fundo
        backdrop: {
            main: appColors.neutralDark,
            onMain: appColors.neutralLightest
        },
        // error
        error: {
            main: appColors.errorDarkest,
            onMain: appColors.neutralLightest
        },
        // background color
        background: {
            main: appColors.neutralDarkest,
            onMain: appColors.neutralLightest
        },
        // placeholder
        placeholder: {
            main: appColors.neutralMedium,
            onMain: appColors.neutralLightest
        },
    },
    border: {
        radius: {
            sm: 5,
        }
    }

}