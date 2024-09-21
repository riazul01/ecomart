import { Typography, Stack, Button } from '@mui/material';
import Bannar from 'components/common/Bannar';
import { MeatBg } from 'data/images';
import IconifyIcon from 'components/base/IconifyIcon';

const FatFree = () => {
  return (
    <Bannar
      bgImage={MeatBg}
      sx={{ px: 3, py: 4, borderRadius: 2, height: 536, width: 1, maxWidth: 424 }}
    >
      <Typography variant="body2" color="info.lighter" textTransform="uppercase" textAlign="center">
        85% Fat Free
      </Typography>
      <Typography mt={2} variant="h2" color="info.lighter" textAlign="center" fontWeight={500}>
        Low-Fat Meat
      </Typography>

      <Typography mt={2} variant="h5" color="info.lighter" textAlign="center" fontWeight={400}>
        Started at{' '}
        <Typography component="span" variant="h5" color="warning.main" fontWeight={600}>
          $79.99
        </Typography>
      </Typography>

      <Stack mt={4} justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
          sx={{ width: 170 }}
        >
          Shop now
        </Button>
      </Stack>
    </Bannar>
  );
};

export default FatFree;
