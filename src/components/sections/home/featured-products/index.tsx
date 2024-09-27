import ProductSlider from 'components/common/ProductSlider';
import ProductCard from 'components/common/ProductCard';
import { products } from 'data/products';

const FeaturedProducts = () => {
  return <ProductSlider title="Featured Products" SliderCard={ProductCard} data={products} />;
};

export default FeaturedProducts;