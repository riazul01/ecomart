import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';

interface Language {
  id: number;
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {
    id: 1,
    code: 'eng',
    lang: 'English',
    flag: 'twemoji:flag-united-kingdom',
  },
  {
    id: 2,
    code: 'ban',
    lang: 'বাংলা',
    flag: 'twemoji:flag-bangladesh',
  },
  {
    id: 3,
    code: 'zh',
    lang: '中文',
    flag: 'twemoji:flag-china',
  },
  {
    id: 4,
    code: 'tr',
    lang: 'Türkçe',
    flag: 'twemoji:flag-turkey',
  },
  {
    id: 5,
    code: 'dan',
    lang: 'Danish',
    flag: 'twemoji:flag-denmark',
  },
];

const LanguageSelect = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item: Language) => {
    setLanguage(item);
    handleMenuClose();
  };

  return (
    <>
      <Tooltip title={`${language.lang} - ${language.code}`}>
        <IconButton onClick={handleMenuOpen} sx={{ fontSize: 'h4.fontSize' }}>
          <IconifyIcon icon={language.flag} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
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
        {languages.map((item) => {
          return (
            <MenuItem
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              sx={{ bgcolor: item.id === language.id ? 'info.main' : null }}
            >
              <ListItemIcon sx={{ mr: 2, fontSize: 'h3.fontSize' }}>
                <IconifyIcon icon={item.flag} />
              </ListItemIcon>
              <ListItemText>
                <Typography>{item.lang}</Typography>
              </ListItemText>
              <ListItemText>
                <Typography textAlign="right">{item.code}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageSelect;
