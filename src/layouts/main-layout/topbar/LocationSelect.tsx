import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

interface Location {
  id: number;
  division: string;
}

const locations: Location[] = [
  {
    id: 1,
    division: 'Dhaka',
  },
  {
    id: 2,
    division: 'Chattogram',
  },
  {
    id: 3,
    division: 'Khulna',
  },
  {
    id: 4,
    division: 'Rajshahi',
  },
  {
    id: 5,
    division: 'Barishal',
  },
  {
    id: 6,
    division: 'Sylhet',
  },
  {
    id: 7,
    division: 'Rangpur',
  },
  {
    id: 8,
    division: 'Mymensingh',
  },
];

const LocationSelect = () => {
  const [location, setLocation] = useState(locations[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: Location) => {
    setLocation(item);
    handleMenuClose();
  };

  return (
    <>
      <ButtonBase
        onClick={handleMenuOpen}
        sx={{ width: 220, display: { xs: 'none', md: 'felex' } }}
        disableRipple
      >
        <Stack spacing={0.5} alignItems="center" width={1}>
          <IconifyIcon
            icon="fluent:location-28-regular"
            color="text.disabled"
            fontSize="body1.fontSize"
          />
          <Typography variant="body2" color="text.disabled">
            {location.division}, Bangladesh
          </Typography>
        </Stack>
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        id="location-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            width: 220,
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        {locations.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{ bgcolor: item.id === location.id ? 'info.main' : null }}
            >
              <ListItemText>
                <Typography>{item.division}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LocationSelect;
