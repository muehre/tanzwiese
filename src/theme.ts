import { Theme } from "./types"

const theme: Theme = {
    borderRadius: '6px',
    palette: {
      primary: { main: '#e47a54', contrastText: '#ffffff'},
      secondary: { main: '#e47a54', contrastText: '#e47a54'},
      paper: { main: '#4d376b', contrastText: '#ffffff'},
   },
   spacing: (multiplier: number) => `${multiplier * 0.875}rem`
}

export default theme