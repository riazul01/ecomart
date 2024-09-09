import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import Bannar from 'components/common/Bannar';
import { SummerSaleBg } from 'data/images';

const SummarSale = () => {
  return (
    <Bannar bgImage={SummerSaleBg} sx={{ flexGrow: 1, p: 3.5 }}>
      <Typography variant="body2" textTransform="uppercase" fontWeight={500} letterSpacing={0.5}>
        Summer Sale
      </Typography>
      <Typography
        mt={1}
        variant="h3"
        textTransform="uppercase"
        fontWeight={600}
        letterSpacing={0.5}
      >
        75% OFF
      </Typography>
      <Typography
        mt={2}
        variant="body2"
        color="text.secondary"
        fontWeight={400}
        letterSpacing={0.5}
      >
        Only Fruit & Vegetable
      </Typography>
      <Button
        variant="text"
        size="medium"
        endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
        sx={{ mt: 2, ml: -2.5 }}
      >
        Shop now
      </Button>
    </Bannar>
  );
};

export default SummarSale;
