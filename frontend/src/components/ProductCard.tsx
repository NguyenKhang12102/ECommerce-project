interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="store-product-card">
      <img className="store-product-card__image" src={product.image} alt={product.name} />

      <div className="store-product-card__body">
        <div className="store-product-card__meta">{product.category}</div>
        <h3 className="store-product-card__title">{product.name}</h3>
        <p className="store-product-card__desc">{product.description}</p>

        <div className="store-product-card__footer">
          <div className="store-product-card__price">{product.price.toLocaleString('vi-VN')}đ</div>
          <button type="button" className="store-button" onClick={() => onAddToCart(product)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard