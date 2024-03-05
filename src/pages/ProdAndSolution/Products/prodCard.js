import { Link } from 'react-router-dom';
import './Product.css'

export function ProductCard({ product, category }) {
  return (
    <Link className="productCard" to={`/product/${category}/${product.id}`}>
      <img src={product.product_img} alt={product.product_name} />
      <p className='text-center'>{product.product_name}</p>
      <div>
      </div>
      <span></span>
    </Link>
  );
};

