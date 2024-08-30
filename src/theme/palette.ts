import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { gray, green, red, yellow, white } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    lighter: gray[100],
    light: gray[300],
    main: gray[500],
    dark: gray[700],
    darker: gray[950],
  },
  primary: {
    lighter: green[100],
    light: green[300],
    main: green[500],
    dark: green[700],
    darker: green[900],
  },
  secondary: {
    lighter: green[200],
    light: green[400],
    main: green[600],
    dark: green[800],
    darker: green[950],
  },
  info: {
    lighter: white[100],
    light: white[200],
    main: white[300],
    dark: white[400],
    darker: white[500],
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
  },
  warning: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[700],
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
  },
  text: {
    primary: gray[900],
    secondary: gray[600],
    disabled: gray[200],
  },
};

export default palette;
