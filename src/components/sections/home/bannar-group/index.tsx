import Stack from '@mui/material/Stack';
import BestDeals from './BestDeals';
import FatFree from './FatFree';

const BannarGroup = () => {
  return (
    <Stack mb={8} justifyContent="space-between">
      <BestDeals />
      <FatFree />
    </Stack>
  );
};

export default BannarGroup;
