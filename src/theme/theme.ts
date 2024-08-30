import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/utils/CssBaseline';
import Button from './components/button/Button';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: Button,

    MuiCssBaseline: CssBaseline,
  },
});
