import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

interface SocialLink {
  id: string | number;
  icon: string;
  link: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: 'ri:facebook-fill',
    link: '#!',
  },
  {
    id: 2,
    icon: 'ri:linkedin-fill',
    link: '#!',
  },
  {
    id: 3,
    icon: 'ri:twitter-x-line',
    link: '#!',
  },
];

const Newsletter = () => {
  return (
    <Stack py={3.5} bgcolor="info.main">
      <Stack
        mx="auto"
        px={1.5}
        alignItems="center"
        justifyContent="space-between"
        width={1}
        maxWidth={1340}
      >
        <div>
          <Typography variant="h5" fontWeight={600}>
            Subcribe our Newsletter
          </Typography>
          <Typography mt={0.75} variant="body2" color="neutral.light">
            Subscribe to our newsletter for the latest news, exclusive offers, <br /> and expert
            insights delivered right to your inbox.
          </Typography>
        </div>

        <Stack spacing={3} alignItems="center" justifyContent="flex-end">
          <Stack
            width={1}
            maxWidth={520}
            alignItems="center"
            justifyContent="center"
            display={{ xs: 'none', md: 'flex' }}
          >
            <TextField
              id="product-search"
              variant="filled"
              placeholder="Your email address"
              sx={{
                width: 1,
                '& .MuiInputBase-root': {
                  pl: 2.5,
                  borderRadius: 8,
                  borderRight: 'none',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: -2,
                py: 0.95,
                width: 160,
                borderRadius: 10,
              }}
            >
              Subscribe
            </Button>
          </Stack>

          <Stack spacing={1} alignItems="center">
            {socialLinks.map((item) => (
              <IconButton
                LinkComponent={Link}
                href={item.link}
                size="large"
                sx={{ bgcolor: 'transparent !important' }}
              >
                <IconifyIcon icon={item.icon} color="neutral.lighter" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Newsletter;
