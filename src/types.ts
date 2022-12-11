interface Palette {
    main: string
    contrastText: string
  }

export interface Theme  {
    borderRadius: string
    palette: {
      primary: Palette
      secondary: Palette
      paper: Palette
   },
   spacing: (multiplier: number) => string
}