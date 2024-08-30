import { topbarLinks } from 'data/topbarLinks';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LanguageSelect from './LanguageSelect';
import LocationSelect from './LocationSelect';
import CurrencySelect from './CurrencySelect';
import TopbarLink from './TopbarLink';

const Topbar = () => {
  const isLoggedIn = true;

  return (
    <Box width={1} borderBottom={1} borderColor="info.main" zIndex={1200}>
      <Stack
        mx="auto"
        px={1.5}
        py={0.5}
        maxWidth={1340}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={{ xs: 0, sm: 1 }} alignItems="center">
          <LanguageSelect />
          <CurrencySelect />
          <LocationSelect />
        </Stack>

        <Typography
          variant="body2"
          color="text.disabled"
          display={{ xs: 'none', lg: 'block' }}
          letterSpacing={0.25}
          fontWeight={400}
        >
          Get{' '}
          <Typography component="span" variant="body2" color="primary.dark" fontWeight={500}>
            30% off
          </Typography>{' '}
          for first order with exciting gift box!{' '}
          <Link
            href="#!"
            color="primary.dark"
            sx={{ textDecoration: 'underline' }}
            fontWeight={500}
          >
            Learn more
          </Link>
        </Typography>

        <Stack spacing={1.5}>
          {topbarLinks.map((elem) => (
            <TopbarLink key={elem.id} isLoggedIn={isLoggedIn} data={elem} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topbar;
