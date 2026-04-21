import type { CartItem } from './StoreLayout'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />

      <aside className="cart-drawer" aria-label="Giỏ hàng">
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Giỏ hàng</h2>
          <button type="button" className="cart-drawer__close" onClick={onClose}>
            Đóng
          </button>
        </div>

        <div className="cart-drawer__list">
          {items.length === 0 ? (
            <p className="cart-empty">Giỏ hàng đang trống.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item__image" src={item.image} alt={item.name} />

                <div>
                  <h3 className="cart-item__name">{item.name}</h3>
                  <p className="cart-item__price">{item.price.toLocaleString('vi-VN')}đ</p>

                  <div className="cart-item__controls">
                    <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                    <button type="button" className="is-danger" onClick={() => onRemoveItem(item.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 ? (
          <div className="cart-drawer__footer">
            <div className="cart-total">
              <span>Tổng cộng</span>
              <span>{total.toLocaleString('vi-VN')}đ</span>
            </div>
            <button type="button" className="store-button" style={{ width: '100%' }}>
              Thanh toán
            </button>
          </div>
        ) : null}
      </aside>
    </>
  )
}

export default CartDrawer