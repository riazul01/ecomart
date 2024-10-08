import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 500,
      border: 'none !important',
      borderRadius: theme.shape.borderRadius * 12,
      textTransform: 'initial',
    }),
    text: ({ theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: 'transparent !important',
    }),
    containedPrimary: ({ theme }) => ({
      color: theme.palette.info.lighter,
      backgroundColor: theme.palette.primary.main,
      '&:hover': { backgroundColor: theme.palette.primary.main },
    }),
    containedSecondary: ({ theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.info.lighter,
      '&:hover': { backgroundColor: theme.palette.info.lighter },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.5, 2.5),
      fontSize: theme.typography.h6.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1.25, 2.25),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.15),
      fontSize: theme.typography.caption.fontSize,
    }),
    startIcon: {
      marginRight: 5,
    },
    endIcon: {
      marginLeft: 12,
    },
  },
};

export default Button;
