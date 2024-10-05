import ProductSlider from 'components/common/ProductSlider';
import ProductCard from 'components/common/ProductCard';
import { products } from 'data/products';

const PopularProducts = () => {
  return <ProductSlider title="Popular Products" SliderCard={ProductCard} data={products} />;
};

export default PopularProducts;
