import { PaletteMode } from '@mui/material';

export enum Colours {
  Celeste = '#75AADB',
  Blanco = '#FFFFFF',
  Amarillo = '#FFD500',
  GrisOscuro = '#333333',
  GrisMedio = '#7E7E7E',
  GrisClaro = '#CFCFCF',
  BlancoGrisaceo = '#F2F2F2',
  Negro = '#000000'
}

export enum ColoursLight {
    LilaClaro = "#CEB4F2",
    VioletaClaro = "#986FBF",
    Blanco = "#FFFFFF",
    GrisClaro = "#D3D3D3",
    Negro = "#000000",
  }
  
export enum ColoursDark {
    LilaOscuro = "#755E8E",
    VioletaOscuro = "#593C6E",
    Blanco = "#FFFFFF",
    GrisClaro = "#A9A9A9",
    Negro = "#000000",
  }
  


export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {main: ColoursLight.VioletaClaro},
          secondary: {main: ColoursLight.GrisClaro},
          divider: ColoursLight.LilaClaro,
          text: {
            primary: Colours.GrisOscuro,
            secondary: ColoursLight.VioletaClaro,
          },
          background: {
            default: Colours.BlancoGrisaceo,
                     
          },
        }
      : {
          // palette values for dark mode
          primary: {main: ColoursDark.VioletaOscuro},
          secondary: {main: ColoursDark.GrisClaro},
          divider: Colours.GrisMedio,
          background: {
            default: Colours.GrisOscuro,
            paper: Colours.Negro,
          },

          text: {
            primary: "#fff",
            secondary: "grey",
          },
        }),
  },
});
