import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

interface Service {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Free Shipping',
    subtitle: 'Free shipping on all your order',
    icon: 'la:shipping-fast',
  },
  {
    id: 2,
    title: 'Customer Support 24/7',
    subtitle: 'Instant access to Support',
    icon: 'iconoir:headset-help',
  },
  {
    id: 3,
    title: '100% Secure Payment',
    subtitle: 'We ensure your money is save',
    icon: 'bi:bag-check',
  },
  {
    id: 4,
    title: 'Money-Back Guarantee',
    subtitle: '30 Days Money-Back Guarantee',
    icon: 'iconoir:box-iso',
  },
];

const FeaturedServices = () => {
  return (
    <Box
      mt={2.5}
      mx={0}
      py={3}
      width={1}
      display="grid"
      gridTemplateColumns={{ xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
      borderBottom={2}
      borderColor="info.main"
      gap={3}
    >
      {services.map((item) => (
        <Stack key={item.id} spacing={2} direction="column" alignItems="center">
          <Stack
            height={75}
            width={75}
            alignItems="center"
            justifyContent="center"
            bgcolor="info.main"
            borderRadius="50%"
          >
            <IconifyIcon icon={item.icon} fontSize="h2.fontSize" color="primary.main" />
          </Stack>
          <Box>
            <Typography variant="body1" textAlign="center" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography mt={0.75} variant="body2" textAlign="center" color="text.secondary">
              {item.subtitle}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default FeaturedServices;
