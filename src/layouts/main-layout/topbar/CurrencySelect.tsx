import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemText from '@mui/material/ListItemText';

interface Currency {
  id: number;
  type: string;
}

const currencies: Currency[] = [
  {
    id: 1,
    type: 'USD',
  },
  {
    id: 2,
    type: 'BDT',
  },
];

const CurrencySelect = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: Currency) => {
    setCurrency(item);
    handleMenuClose();
  };

  return (
    <>
      <ButtonBase onClick={handleMenuOpen} sx={{ width: 60 }} disableRipple>
        <Typography variant="body2" color="text.disabled">
          {currency.type}
        </Typography>
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        id="currency-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            width: 80,
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {currencies.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{ bgcolor: item.id === currency.id ? 'info.main' : null }}
            >
              <ListItemText>
                <Typography textAlign="center">{item.type}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CurrencySelect;
