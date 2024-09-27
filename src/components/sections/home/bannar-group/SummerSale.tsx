import { Typography, Stack, Button, Chip } from '@mui/material';
import Bannar from 'components/common/Bannar';
import { FruitsBg } from 'data/images';
import IconifyIcon from 'components/base/IconifyIcon';

const SummerSale = () => {
  return (
    <Bannar
      bgImage={FruitsBg}
      sx={{ px: 3, py: 4, borderRadius: 2, height: 536, width: 1, maxWidth: 424 }}
    >
      <Typography variant="body2" textTransform="uppercase" textAlign="center" fontWeight={500}>
        Summer Sale
      </Typography>
      <Typography mt={2} variant="h2" textAlign="center" fontWeight={600}>
        100% Fresh Fruit
      </Typography>

      <Stack mt={2} spacing={1.25} alignItems="center" justifyContent="center">
        <Typography variant="h6" fontWeight={500}>
          Up to
        </Typography>
        <Chip label="60% OFF" size="medium" color="secondary" />
      </Stack>

      <Stack mt={3.5} justifyContent="center">
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

export default SummerSale;
