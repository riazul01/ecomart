import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardActions: Components<Omit<Theme, 'components'>>['MuiCardActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1),
    }),
  },
};

export default CardActions;
