import Stack from '@mui/material/Stack';
import BestDeals from './BestDeals';
import FatFree from './FatFree';
import SummerSale from './SummerSale';

const BannarGroup = () => {
  return (
    <Stack mb={8} justifyContent="space-between">
      <BestDeals />
      <FatFree />
      <SummerSale />
    </Stack>
  );
};

export default BannarGroup;
