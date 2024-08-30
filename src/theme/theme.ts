import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/utils/CssBaseline';
import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';
import Chip from './components/data-display/Chip';
import Badge from './components/data-display/Badge';
import FilledInput from './components/inputs/FilledIntpu';
import OutlinedInput from './components/inputs/OutlinedInput';
import InputAdornment from './components/inputs/InputAdornment';
import InputBase from './components/inputs/InputBase';
import Select from './components/inputs/Select';
import Stack from './components/layout/Stack';
import Paper from './components/surfaces/Paper';
import Link from './components/navigation/Link';
import List from './components/list/List';
import Collapse from './components/list/Collapse';
import ListItemButton from './components/list/ListItemButton';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiStack: Stack,
    MuiPaper: Paper,
    MuiLink: Link,

    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputBase: InputBase,
    MuiInputAdornment: InputAdornment,
    MuiSelect: Select,

    MuiList: List,
    MuiCollapse: Collapse,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,

    MuiChip: Chip,
    MuiBadge: Badge,

    MuiCssBaseline: CssBaseline,
  },
});
