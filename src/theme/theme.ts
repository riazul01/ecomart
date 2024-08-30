import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/utils/CssBaseline';
import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,

    MuiCssBaseline: CssBaseline,
  },
});
