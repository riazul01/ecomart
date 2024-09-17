import Box from '@mui/material/Box';
import BannarGroup from 'components/sections/home/bannar-group';
import Categories from 'components/sections/home/categories';
import FeaturedProducts from 'components/sections/home/featured-products';
import FeaturedServices from 'components/sections/home/featured-services';
import Hero from 'components/sections/home/hero';
import DiscountBannar from 'components/sections/home/discount-bannar';
import Blogs from 'components/sections/home/blogs';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        <Hero />
        <FeaturedServices />
        <Categories />
        <FeaturedProducts />
        <BannarGroup />
        <DiscountBannar />
        <Blogs />
      </Box>
    </>
  );
};

export default Home;
