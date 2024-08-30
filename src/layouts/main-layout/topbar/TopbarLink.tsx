import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TopbarLink as TopbarLinkItem } from 'data/topbarLinks';

interface TopbarLinkProps {
  data: TopbarLinkItem;
  isLoggedIn: boolean;
}

const TopbarLink = ({ data, isLoggedIn }: TopbarLinkProps) => {
  return (
    <Stack
      key={data.id}
      alignItems="center"
      display={{
        xs: isLoggedIn
          ? data.pathname === 'account'
            ? 'flex'
            : 'none'
          : data.pathname === 'login' || data.pathname === 'register'
            ? 'flex'
            : 'none',
        sm: isLoggedIn
          ? data.pathname === 'login' || data.pathname === 'register'
            ? 'none'
            : 'flex'
          : data.pathname === 'account'
            ? 'none'
            : 'flex',
      }}
      spacing={1.5}
    >
      <Link href={data.path} color="text.disabled" fontSize="body2.fontSize" fontWeight={400}>
        {data.subheader}
      </Link>
      <Typography
        variant="body2"
        color="info.dark"
        sx={{
          display: {
            xs: isLoggedIn
              ? data.pathname === 'account'
                ? 'none'
                : 'flex'
              : data.pathname === 'register'
                ? 'none'
                : 'flex',
            sm: data.pathname === 'faq' ? 'none' : 'flex',
          },
        }}
      >
        |
      </Typography>
    </Stack>
  );
};

export default TopbarLink;
