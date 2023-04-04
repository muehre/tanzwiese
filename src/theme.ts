import { createTheme } from "@mui/material"
import { Theme } from "./types"

const theme: Theme = {
    borderRadius: '6px',
    palette: {
      primary: { main: '#439fa1', contrastText: '#ffffff'},
      secondary: { main: '#ff572a', contrastText: '#ffffff'},
      paper: { main: '#4d376b', contrastText: '#ffffff'},
   },
   spacing: (multiplier: number) => `${multiplier * 0.875}rem`
}

export default theme

export const muiTheme = createTheme({
   ...theme,
   components: {
      MuiButton: {
         styleOverrides: {
            contained: {
               "background": "#00faff50 !important",
               "backdropFilter": "blur(1px)"
            },
            outlined: {
               "background": "#FFFFFF13 !important",
               "backdropFilter": "blur(1px)"
            }
         }
      }
   }
})