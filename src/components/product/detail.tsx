import { Product } from '../../types'

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product
}) => (
  <div className="product-item">
    <span className="product-item__category">{category}</span>
    <p className="product-item__title">{title}</p>
    <img className="product-item__image" src={image} />
    <p className="product-item__description">{description}</p>
    <span className="product-item__price">${price}</span>
    <span className="product-item__rating">{rate}</span>
  </div>
)

export default ProductDetail
