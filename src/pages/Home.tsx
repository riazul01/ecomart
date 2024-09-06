import Box from '@mui/material/Box';
import Categories from 'components/sections/home/categories';
import FeaturedProducts from 'components/sections/home/featured-products';
import Hero from 'components/sections/home/hero';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </Box>
    </>
  );
};

export default Home;
