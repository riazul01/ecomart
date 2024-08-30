import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/utils/CssBaseline';
import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';
import Badge from './components/data-display/Badge';
import Chip from './components/data-display/Chip';
import FilledInput from './components/inputs/FilledIntpu';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiFilledInput: FilledInput,

    MuiBadge: Badge,
    MuiChip: Chip,

    MuiCssBaseline: CssBaseline,
  },
});
