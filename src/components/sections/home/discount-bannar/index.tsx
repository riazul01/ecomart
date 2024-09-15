import Bannar from 'components/common/Bannar';
import bannarImg from 'assets/images/backgrounds/discount.png';
import { Box, Typography, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const DiscountBannar = () => {
  return (
    <Bannar bgImage={bannarImg} sx={{ display: 'flex', alignItems: 'center', height: 320 }}>
      <Box ml="auto" width={1} maxWidth={420}>
        <Typography variant="body2" color="info.lighter" textTransform="uppercase">
          Summer Sale
        </Typography>
        <Typography mt={1} variant="h2" color="info.lighter" fontWeight={500}>
          <Typography variant="h2" component="span" color="warning.main" fontWeight={600}>
            37%
          </Typography>{' '}
          OFF
        </Typography>
        <Typography mt={1.75} variant="body2" color="neutral.lighter">
          Free on all your order, Free Shipping and 30 days <br /> money-back guarantee
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
          sx={{ mt: 3.25, width: 170 }}
        >
          Shop now
        </Button>
      </Box>
    </Bannar>
  );
};

export default DiscountBannar;
