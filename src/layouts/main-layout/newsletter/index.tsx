import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Newsletter = () => {
  return (
    <Stack py={3.5} bgcolor="info.main">
      <Stack mx="auto" px={1.5} alignItems="center" justifyContent="space-between" width={1} maxWidth={1340}>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Subcribe our Newsletter
          </Typography>
          <Typography mt={0.75} variant="body2" color="neutral.light">
            Subscribe to our newsletter for the latest news, exclusive offers, <br /> and expert
            insights delivered right to your inbox.
          </Typography>
        </Box>

        <Stack>
          <Stack
            width={1}
            maxWidth={498}
            alignItems="center"
            justifyContent="center"
            display={{ xs: 'none', md: 'flex' }}
          >
            <TextField
              id="product-search"
              variant="filled"
              placeholder="Search products..."
              sx={{
                width: 1,
                '& .MuiInputBase-root': {
                  borderRight: 'none',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconifyIcon icon="prime:search" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                py: 0.95,
                width: 120,
                borderRadius: 1.5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Search
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <IconButton size="large" sx={{ bgcolor: 'transparent !important' }}>
            <IconifyIcon icon="la:shopping-bag" />
          </IconButton>

          <IconButton size="large" sx={{ bgcolor: 'transparent !important' }}>
            <IconifyIcon icon="la:shopping-bag" />
          </IconButton>

          <IconButton size="large" sx={{ bgcolor: 'transparent !important' }}>
            <IconifyIcon icon="la:shopping-bag" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Newsletter;
