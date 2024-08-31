import { Stack } from '@mui/material';

const Hero = () => {
  return (
    <Stack mt={2.5} mx="auto" width={1} spacing={2.5} direction={{ xs: 'column', md: 'row' }}>
      <h1>Mainitem</h1>
      <Stack spacing={2.5} direction="column" flex={1} minWidth={320}>
        <h1>Subitems</h1>
      </Stack>
    </Stack>
  );
};

export default Hero;
