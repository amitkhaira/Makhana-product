import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductShowcase.css';

const ProductShowcase = () => {
    return (
        <section className="product-showcase">
            <div className="section-header">
                <h2>Our Flavors</h2>
                <p>Pick your favorite crunch</p>
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;
