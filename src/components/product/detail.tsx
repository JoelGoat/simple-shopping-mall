import { Product } from '../../graphql/products'

const ProductDetail = ({ item: { title, imageUrl, description, price } }: { item: Product }) => (
  <div className="product-item">
    <p className="product-item__title">{title}</p>
    <img className="product-item__image" src={imageUrl} />
    <p className="product-item__description">{description}</p>
    <span className="product-item__price">${price}</span>
  </div>
)

export default ProductDetail
