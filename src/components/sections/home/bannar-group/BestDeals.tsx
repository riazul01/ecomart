import { Typography, Stack, Button } from '@mui/material';
import Bannar from 'components/common/Bannar';
import { VegetablesBg } from 'data/images';
import IconifyIcon from 'components/base/IconifyIcon';

const BestDeals = () => {
  return (
    <Bannar
      bgImage={VegetablesBg}
      sx={{ px: 3, py: 4, borderRadius: 2, height: 536, width: 1, maxWidth: 424 }}
    >
      <Typography variant="body2" color="info.lighter" textTransform="uppercase" textAlign="center">
        Best Deals
      </Typography>
      <Typography mt={2} variant="h2" color="info.lighter" textAlign="center" fontWeight={500}>
        Sale of the Month
      </Typography>

      <Stack mt={2} spacing={2} alignItems="flex-start" justifyContent="center">
        <div>
          <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={300}>
            00
          </Typography>
          <Typography
            mt={0.5}
            variant="body2"
            color="info.main"
            textAlign="center"
            textTransform="uppercase"
            fontWeight={300}
          >
            Days
          </Typography>
        </div>
        <Typography mt={-0.25} variant="h3" color="info.main" fontWeight={300}>
          :
        </Typography>

        <div>
          <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={300}>
            00
          </Typography>
          <Typography
            mt={0.5}
            variant="body2"
            color="info.main"
            textAlign="center"
            textTransform="uppercase"
            fontWeight={300}
          >
            Hours
          </Typography>
        </div>
        <Typography mt={-0.25} variant="h3" color="info.main" fontWeight={300}>
          :
        </Typography>

        <div>
          <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={300}>
            00
          </Typography>
          <Typography
            mt={0.5}
            variant="body2"
            color="info.main"
            textAlign="center"
            textTransform="uppercase"
            fontWeight={300}
          >
            Mins
          </Typography>
        </div>
        <Typography mt={-0.25} variant="h3" color="info.main" fontWeight={300}>
          :
        </Typography>

        <div>
          <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={300}>
            00
          </Typography>
          <Typography
            mt={0.5}
            variant="body2"
            color="info.main"
            textAlign="center"
            textTransform="uppercase"
            fontWeight={300}
          >
            Secs
          </Typography>
        </div>
      </Stack>

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

export default BestDeals;
