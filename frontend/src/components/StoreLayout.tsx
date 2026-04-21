import { useState } from 'react'
import { Dumbbell } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import CartDrawer from './CartDrawer'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface OutletContext {
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

function StoreLayout() {
  const location = useLocation()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/workouts', label: 'Bài tập' },
    { to: '/memberships', label: 'Gói tập' },
    { to: '/personal-training', label: 'Gói PT' },
    { to: '/login', label: 'Đăng nhập' },
  ]

  return (
    <div className="store-shell">
      <header className="store-header">
        <div className="store-header__inner">
          <NavLink to="/" className="store-brand" aria-label="Gym Equipment Store">
            <div className="store-brand__mark" aria-hidden="true">
              <Dumbbell />
            </div>
            <div className="store-brand__text">
              <strong>IRON FITNESS</strong>
              <span>Gym Equipment Store</span>
            </div>
          </NavLink>

          <nav className="store-nav" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive || location.pathname === item.to ? 'is-active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="store-actions">
            <button
              type="button"
              className="store-cart-button"
              onClick={() => setIsCartOpen(true)}
            >
              Giỏ hàng
              {cartCount > 0 ? <span className="store-cart-badge">{cartCount}</span> : null}
            </button>
            <button
              type="button"
              className="store-menu-button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label="Mở menu"
            >
              Menu
            </button>
          </div>
        </div>

        <div className={`store-mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </header>

      <Outlet context={{ cartItems, setCartItems } satisfies OutletContext} />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={(id, quantity) => {
          if (quantity < 1) {
            return
          }

          setCartItems((previous) =>
            previous.map((item) => (item.id === id ? { ...item, quantity } : item)),
          )
        }}
        onRemoveItem={(id) => setCartItems((previous) => previous.filter((item) => item.id !== id))}
      />
    </div>
  )
}

export default StoreLayout