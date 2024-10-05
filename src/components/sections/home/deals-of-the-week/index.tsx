import { Box, Stack, Grid, Typography } from '@mui/material';
import ProductCard from 'components/common/ProductCard';
import { products } from 'data/products';

const DealsOfTheWeek = () => {
  return (
    <Box mb={8}>
      <Stack mb={3.5} justifyContent="space-between">
        <div>
          <Typography variant="h4" fontWeight={600}>
            Deals of the Week
          </Typography>
          <Typography mt={1} variant="body1" color="text.secondary">
            Grab exclusive offers before they're gone!
          </Typography>
        </div>
        <Stack spacing={1.5}>
          <Stack
            direction="column"
            height={90}
            width={90}
            alignItems="center"
            justifyContent="center"
            bgcolor="tomato"
            borderRadius={1}
          >
            <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={500}>
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
          </Stack>

          <Stack
            direction="column"
            height={90}
            width={90}
            alignItems="center"
            justifyContent="center"
            bgcolor="tomato"
            borderRadius={1}
          >
            <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={500}>
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
          </Stack>

          <Stack
            direction="column"
            height={90}
            width={90}
            alignItems="center"
            justifyContent="center"
            bgcolor="tomato"
            borderRadius={1}
          >
            <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={500}>
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
              Minutes
            </Typography>
          </Stack>

          <Stack
            direction="column"
            height={90}
            width={90}
            alignItems="center"
            justifyContent="center"
            bgcolor="tomato"
            borderRadius={1}
          >
            <Typography variant="h3" color="info.lighter" textAlign="center" fontWeight={500}>
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
              Seconds
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Grid container spacing={4.5}>
        {products.slice(0, 8).map((item) => (
          <Grid key={item.id} item xs={12} lg={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DealsOfTheWeek;
