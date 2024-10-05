import Box from '@mui/material/Box';
import BannarGroup from 'components/sections/home/bannar-group';
import Categories from 'components/sections/home/categories';
import FeaturedProducts from 'components/sections/home/featured-products';
import FeaturedServices from 'components/sections/home/featured-services';
import Hero from 'components/sections/home/hero';
import DiscountBannar from 'components/sections/home/discount-bannar';
import Blogs from 'components/sections/home/blogs';
import PopularProducts from 'components/sections/home/popular-products';
import DealsOfTheWeek from 'components/sections/home/deals-of-the-week';

const Home = () => {
  return (
    <>
      <Box mx="auto" px={1.5} width={1} maxWidth={1332}>
        <Hero />
        <FeaturedServices />
        <Categories />
        <FeaturedProducts />
        <PopularProducts />
        <BannarGroup />
        <DealsOfTheWeek />
        <DiscountBannar />
        <Blogs />
      </Box>
    </>
  );
};

export default Home;
