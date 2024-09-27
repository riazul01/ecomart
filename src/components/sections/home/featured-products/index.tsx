import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCard from 'components/common/ProductCard';

const FeaturedProducts = () => {
  return (
    <Box mb={8}>
      <Stack mb={2.25} justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight={600}>
          Featured Products
        </Typography>
      </Stack>

      <Box>
        <ProductCard />
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
