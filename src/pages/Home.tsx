import Box from '@mui/material/Box';
import Hero from 'components/sections/home/hero';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        <Hero />
      </Box>
    </>
  );
};

export default Home;
