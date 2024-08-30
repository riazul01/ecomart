import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline: CssBaseline,
  },
});
