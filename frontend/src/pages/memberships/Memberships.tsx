import { Check } from 'lucide-react'

interface MembershipPlan {
  id: number
  name: string
  price: number
  period: string
  popular?: boolean
  features: string[]
  color: string
}

const plans: MembershipPlan[] = [
  {
    id: 1,
    name: 'Gói cơ bản',
    price: 500000,
    period: 'tháng',
    color: 'from-gray-600 to-gray-800',
    features: [
      'Truy cập phòng gym trong giờ hành chính',
      'Sử dụng tất cả thiết bị cơ bản',
      'Tủ khóa miễn phí',
      'Tư vấn chế độ tập ban đầu',
    ],
  },
  {
    id: 2,
    name: 'Gói tiêu chuẩn',
    price: 800000,
    period: 'tháng',
    popular: true,
    color: 'from-blue-600 to-blue-800',
    features: [
      'Truy cập phòng gym 24/7',
      'Sử dụng toàn bộ thiết bị',
      'Tủ khóa cá nhân',
      'Tham gia các lớp group fitness',
      'Tư vấn dinh dưỡng cơ bản',
      'Giảm 10% sản phẩm tại cửa hàng',
    ],
  },
  {
    id: 3,
    name: 'Gói VIP',
    price: 1500000,
    period: 'tháng',
    color: 'from-amber-600 to-amber-800',
    features: [
      'Tất cả quyền lợi gói tiêu chuẩn',
      'Ưu tiên đặt chỗ lớp học',
      'Truy cập khu vực VIP',
      'Massage thư giãn 2 lần/tháng',
      'Tư vấn dinh dưỡng chuyên sâu',
      'Giảm 20% sản phẩm tại cửa hàng',
      'Khăn tắm và nước uống miễn phí',
    ],
  },
  {
    id: 4,
    name: 'Gói 3 tháng',
    price: 2100000,
    period: '3 tháng',
    color: 'from-green-600 to-green-800',
    features: [
      'Truy cập phòng gym 24/7',
      'Sử dụng toàn bộ thiết bị',
      'Tủ khóa cá nhân',
      'Tham gia các lớp group fitness',
      'Tiết kiệm 300k so với đăng ký theo tháng',
    ],
  },
  {
    id: 5,
    name: 'Gói 6 tháng',
    price: 4200000,
    period: '6 tháng',
    color: 'from-purple-600 to-purple-800',
    features: [
      'Tất cả quyền lợi gói tiêu chuẩn',
      'Tiết kiệm 600k so với đăng ký theo tháng',
      '1 buổi PT miễn phí',
      'Tặng 1 tháng nếu giới thiệu bạn bè',
    ],
  },
  {
    id: 6,
    name: 'Gói 12 tháng',
    price: 7200000,
    period: '12 tháng',
    color: 'from-red-600 to-red-800',
    features: [
      'Tất cả quyền lợi gói VIP',
      'Tiết kiệm 1.8 triệu so với đăng ký theo tháng',
      '4 buổi PT miễn phí',
      'Ưu đãi đặc biệt cho người thân',
      'Tặng áo thun Iron Fitness cao cấp',
    ],
  },
]

function Memberships() {
  return (
    <main className="store-main memberships-page">
      <section className="memberships-hero">
        <div className="store-hero__badge">Membership Plans</div>
        <h1 className="store-hero__title">Các gói tập luyện</h1>
        <p className="store-hero__copy">Chọn gói phù hợp với mục tiêu và ngân sách của bạn.</p>
      </section>

      <section className="membership-grid">
        {plans.map((plan) => (
          <article key={plan.id} className={`membership-card ${plan.popular ? 'is-popular' : ''}`}>
            {plan.popular ? <div className="membership-card__popular">PHỔ BIẾN NHẤT</div> : null}

            <div className={`membership-card__header bg-gradient-to-r ${plan.color}`}>
              <h2>{plan.name}</h2>
              <div className="membership-card__price">
                <strong>{plan.price.toLocaleString('vi-VN')}</strong>
                <span>đ</span>
              </div>
              <p>{plan.period}</p>
            </div>

            <div className="membership-card__body">
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className={`membership-card__button ${plan.popular ? 'is-popular' : ''}`}>
                Đăng ký ngay
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="membership-cta">
        <h3>Chưa chắc chắn nên chọn gói nào?</h3>
        <p>Liên hệ với chúng tôi để được tư vấn miễn phí về gói tập phù hợp nhất.</p>
        <button type="button" className="store-button">
          Liên hệ tư vấn
        </button>
      </section>
    </main>
  )
}

export default Memberships