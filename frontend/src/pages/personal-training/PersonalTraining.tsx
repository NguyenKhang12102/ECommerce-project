import { Check, Star, Users } from 'lucide-react'

interface PTPackage {
  id: number
  name: string
  sessions: number
  price: number
  pricePerSession: number
  savings?: string
  features: string[]
  popular?: boolean
}

interface Trainer {
  id: number
  name: string
  specialty: string
  experience: string
  image: string
  rating: number
  clients: number
}

const packages: PTPackage[] = [
  {
    id: 1,
    name: 'Gói khởi đầu',
    sessions: 4,
    price: 1600000,
    pricePerSession: 400000,
    features: [
      '4 buổi tập 1-1 với PT',
      'Đánh giá thể chất ban đầu',
      'Lên kế hoạch tập luyện cá nhân',
      'Tư vấn dinh dưỡng cơ bản',
    ],
  },
  {
    id: 2,
    name: 'Gói phổ biến',
    sessions: 8,
    price: 3000000,
    pricePerSession: 375000,
    savings: 'Tiết kiệm 200k',
    popular: true,
    features: [
      '8 buổi tập 1-1 với PT',
      'Đánh giá thể chất chi tiết',
      'Kế hoạch tập luyện 4 tuần',
      'Kế hoạch dinh dưỡng chi tiết',
      'Theo dõi tiến độ hàng tuần',
    ],
  },
  {
    id: 3,
    name: 'Gói cam kết',
    sessions: 12,
    price: 4200000,
    pricePerSession: 350000,
    savings: 'Tiết kiệm 600k',
    features: [
      '12 buổi tập 1-1 với PT',
      'Đánh giá thể chất toàn diện',
      'Kế hoạch tập luyện 6 tuần',
      'Kế hoạch dinh dưỡng chuyên sâu',
      'Theo dõi tiến độ chi tiết',
      'Hỗ trợ online 24/7',
    ],
  },
  {
    id: 4,
    name: 'Gói chuyển đổi',
    sessions: 24,
    price: 7200000,
    pricePerSession: 300000,
    savings: 'Tiết kiệm 2.4 triệu',
    features: [
      '24 buổi tập 1-1 với PT',
      'Đánh giá & đo lường hàng tháng',
      'Kế hoạch tập 12 tuần',
      'Kế hoạch dinh dưỡng toàn diện',
      'Hỗ trợ online không giới hạn',
      'Tặng 1 tháng membership',
      'Đảm bảo kết quả',
    ],
  },
]

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Trần Minh Tuấn',
    specialty: 'Tăng cơ & Sức mạnh',
    experience: '8 năm',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400',
    rating: 4.9,
    clients: 150,
  },
  {
    id: 2,
    name: 'Nguyễn Thị Lan',
    specialty: 'Giảm cân & Yoga',
    experience: '6 năm',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
    rating: 4.8,
    clients: 120,
  },
  {
    id: 3,
    name: 'Lê Hoàng Nam',
    specialty: 'Thể hình & Dinh dưỡng',
    experience: '10 năm',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    rating: 5.0,
    clients: 200,
  },
  {
    id: 4,
    name: 'Phạm Thu Hà',
    specialty: 'HIIT & Cardio',
    experience: '5 năm',
    image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=400',
    rating: 4.7,
    clients: 90,
  },
]

function PersonalTraining() {
  return (
    <main className="store-main personal-training-page">
      <section className="pt-hero">
        <div className="store-hero__badge">Personal Training</div>
        <h1 className="store-hero__title">Huấn luyện cá nhân 1-1</h1>
        <p className="store-hero__copy">Giúp bạn đạt mục tiêu nhanh chóng và hiệu quả với PT chuyên nghiệp.</p>
      </section>

      <section className="pt-section">
        <h2 className="pt-section__title">Các gói PT</h2>
        <div className="pt-packages-grid">
          {packages.map((pkg) => (
            <article key={pkg.id} className={`pt-package ${pkg.popular ? 'is-popular' : ''}`}>
              {pkg.popular ? <div className="pt-package__popular">ĐƯỢC YÊU THÍCH</div> : null}

              <h3>{pkg.name}</h3>
              <div className="pt-package__price">
                <strong>{pkg.price.toLocaleString('vi-VN')}</strong>
                <span>đ</span>
              </div>
              <p className="pt-package__session">{pkg.pricePerSession.toLocaleString('vi-VN')}đ/buổi</p>
              {pkg.savings ? <p className="pt-package__savings">{pkg.savings}</p> : null}

              <div className="pt-package__sessions">
                <strong>{pkg.sessions}</strong>
                <span>buổi tập</span>
              </div>

              <ul className="pt-package__features">
                {pkg.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className={`pt-package__button ${pkg.popular ? 'is-popular' : ''}`}>
                Đăng ký ngay
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-section">
        <h2 className="pt-section__title">Đội ngũ huấn luyện viên</h2>
        <div className="pt-trainers-grid">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="pt-trainer-card">
              <img src={trainer.image} alt={trainer.name} />
              <div className="pt-trainer-card__body">
                <h3>{trainer.name}</h3>
                <p className="pt-trainer-card__specialty">{trainer.specialty}</p>
                <p className="pt-trainer-card__experience">Kinh nghiệm: {trainer.experience}</p>

                <div className="pt-trainer-card__stats">
                  <div>
                    <Star size={14} fill="currentColor" />
                    <span>{trainer.rating}</span>
                  </div>
                  <div>
                    <Users size={14} />
                    <span>{trainer.clients}+ học viên</span>
                  </div>
                </div>

                <button type="button" className="pt-trainer-card__button">
                  Xem hồ sơ
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-cta">
        <h3>Đăng ký buổi tư vấn miễn phí</h3>
        <p>Gặp gỡ huấn luyện viên, đánh giá thể chất và nhận tư vấn chương trình phù hợp.</p>
        <button type="button" className="pt-cta__button">
          Đặt lịch ngay
        </button>
      </section>
    </main>
  )
}

export default PersonalTraining