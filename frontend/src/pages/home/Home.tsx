import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import CategoryFilter from '../../components/CategoryFilter'
import ProductCard from '../../components/ProductCard'

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

interface CartItem extends Product {
  quantity: number
}

interface OutletContext {
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const products: Product[] = [
  {
    id: 1,
    name: 'Dây kháng lực cao cấp',
    price: 299000,
    category: 'Dụng cụ hỗ trợ',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    description: 'Bộ 5 dây kháng lực với độ đàn hồi khác nhau, phù hợp mọi cấp độ'
  },
  {
    id: 2,
    name: 'Găng tay tập gym',
    price: 199000,
    category: 'Dụng cụ hỗ trợ',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500',
    description: 'Găng tay có đệm, bảo vệ bàn tay khi tập tạ'
  },
  {
    id: 3,
    name: 'Dây nhảy thể thao',
    price: 149000,
    category: 'Dụng cụ hỗ trợ',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    description: 'Dây nhảy có đếm số, tốc độ điều chỉnh được'
  },
  {
    id: 4,
    name: 'Đai lưng tập gym',
    price: 449000,
    category: 'Dụng cụ hỗ trợ',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
    description: 'Đai hỗ trợ lưng chuyên dụng cho squat và deadlift'
  },
  {
    id: 5,
    name: 'Whey Protein 2kg',
    price: 1299000,
    category: 'Thực phẩm bổ sung',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
    description: 'Whey protein isolate cao cấp, 25g protein mỗi khẩu phần'
  },
  {
    id: 6,
    name: 'Creatine Monohydrate',
    price: 549000,
    category: 'Thực phẩm bổ sung',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500',
    description: 'Creatine tinh khiết, tăng sức mạnh và sức bền'
  },
  {
    id: 7,
    name: 'Pre-Workout Formula',
    price: 899000,
    category: 'Thực phẩm bổ sung',
    image: 'https://images.unsplash.com/photo-1583969393161-bfc673827c7a?w=500',
    description: 'Công thức tiền tập với caffeine và beta-alanine'
  },
  {
    id: 8,
    name: 'BCAA 2:1:1',
    price: 699000,
    category: 'Thực phẩm bổ sung',
    image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=500',
    description: 'Amino acids thiết yếu, hỗ trợ phục hồi cơ bắp'
  },
  {
    id: 9,
    name: 'Áo tank gym nam',
    price: 249000,
    category: 'Quần áo',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
    description: 'Áo ba lỗ thể thao, thấm hút mồ hôi tốt'
  },
  {
    id: 10,
    name: 'Quần short tập luyện',
    price: 349000,
    category: 'Quần áo',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500',
    description: 'Quần short co giãn 4 chiều, có túi đựng điện thoại'
  },
  {
    id: 11,
    name: 'Quần legging nữ',
    price: 449000,
    category: 'Quần áo',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500',
    description: 'Quần legging lưng cao, vải chống squat'
  },
  {
    id: 12,
    name: 'Áo thun thể thao',
    price: 299000,
    category: 'Quần áo',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500',
    description: 'Áo thun thoáng khí, chống UV'
  },
]

export default function Home() {
  const { setCartItems } = useOutletContext<OutletContext>()
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const categories = ['Tất cả', 'Dụng cụ hỗ trợ', 'Thực phẩm bổ sung', 'Quần áo']

  const filteredProducts =
    activeCategory === 'Tất cả' ? products : products.filter((product) => product.category === activeCategory)

  const handleAddToCart = (product: Product) => {
    setCartItems((previous) => {
      const existing = previous.find((item) => item.id === product.id)

      if (existing) {
        return previous.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...previous, { ...product, quantity: 1 }]
    })
  }

  return (
    <main className="store-main">
      <section className="store-hero">
        <img
          className="store-hero__image"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600"
          alt="Gym banner"
        />
        <div className="store-hero__overlay" />

        <div className="store-hero__content">
          <div className="store-hero__badge">Gym Equipment Store</div>
          <h1 className="store-hero__title">Trang bị cho hành trình của bạn</h1>
          <p className="store-hero__copy">
            Dụng cụ hỗ trợ, quần áo và thực phẩm bổ sung chất lượng cao, trình bày theo tinh thần của bản thiết kế Figma.
          </p>
        </div>

        <div className="store-hero__stats">
          <div className="store-stat">
            <strong>120+</strong>
            <span>Sản phẩm và thiết bị đang bán</span>
          </div>
          <div className="store-stat">
            <strong>24/7</strong>
            <span>Hỗ trợ khách hàng liên tục</span>
          </div>
          <div className="store-stat">
            <strong>98%</strong>
            <span>Tỷ lệ đánh giá hài lòng</span>
          </div>
        </div>
      </section>

      <section className="store-section">
        <h2 className="store-section__heading">Danh mục sản phẩm</h2>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="store-products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      <section className="store-banner">
        <div>
          <strong>Chưa chắc chọn gì cho buổi tập?</strong>
          <p>Hãy xem các gói tập và danh mục chuyên sâu để chọn cấu hình phù hợp nhất.</p>
        </div>
        <Link to="/login" className="store-button" style={{ textDecoration: 'none' }}>
          Về trang đăng nhập
        </Link>
      </section>
    </main>
  )
}
