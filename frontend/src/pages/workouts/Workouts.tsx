import { useState } from 'react'
import { Download, Lock, Play, Star } from 'lucide-react'

interface Workout {
  id: number
  title: string
  description: string
  duration: string
  level: string
  image: string
  isFree: boolean
  price?: number
  rating: number
}

const workouts: Workout[] = [
  {
    id: 1,
    title: 'Giáo án tăng cơ cho người mới',
    description: 'Chương trình 8 tuần tăng cơ bắp toàn diện cho người mới bắt đầu',
    duration: '8 tuần',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500',
    isFree: false,
    price: 499000,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Bài tập chân cơ bản',
    description: 'Video hướng dẫn các bài tập chân hiệu quả: squat, lunge, leg press',
    duration: '20 phút',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500',
    isFree: true,
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Giảm mỡ toàn thân',
    description: 'Chương trình kết hợp cardio và HIIT để giảm mỡ hiệu quả',
    duration: '6 tuần',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    isFree: false,
    price: 399000,
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Tập ngực hiệu quả',
    description: 'Video miễn phí hướng dẫn các bài tập ngực với barbell và dumbbell',
    duration: '15 phút',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500',
    isFree: true,
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Giáo án nâng cao sức mạnh',
    description: 'Chương trình powerlifting cho vận động viên trung cấp - nâng cao',
    duration: '12 tuần',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
    isFree: false,
    price: 799000,
    rating: 5.0,
  },
  {
    id: 6,
    title: 'Tập lưng toàn diện',
    description: 'Hướng dẫn miễn phí các bài tập lưng từ cơ bản đến nâng cao',
    duration: '18 phút',
    level: 'All levels',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500',
    isFree: true,
    rating: 4.7,
  },
  {
    id: 7,
    title: 'Cơ bụng 6 múi',
    description: 'Chương trình tập abs chuyên sâu với kế hoạch dinh dưỡng đi kèm',
    duration: '4 tuần',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    isFree: false,
    price: 299000,
    rating: 4.4,
  },
  {
    id: 8,
    title: 'Khởi động toàn thân',
    description: 'Video khởi động miễn phí trước mỗi buổi tập',
    duration: '10 phút',
    level: 'All levels',
    image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=500',
    isFree: true,
    rating: 4.3,
  },
]

function Workouts() {
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all')

  const filteredWorkouts = workouts.filter((workout) => {
    if (filter === 'free') return workout.isFree
    if (filter === 'paid') return !workout.isFree
    return true
  })

  return (
    <main className="store-main workouts-page">
      <section className="workouts-hero">
        <div className="store-hero__badge">Workout Library</div>
        <h1 className="store-hero__title">Bài tập &amp; Giáo án</h1>
        <p className="store-hero__copy">
          Thư viện bài tập và giáo án tập luyện từ cơ bản đến nâng cao.
        </p>
      </section>

      <section className="store-section">
        <div className="workouts-filter">
          <button type="button" className={filter === 'all' ? 'is-active' : ''} onClick={() => setFilter('all')}>
            Tất cả
          </button>
          <button type="button" className={filter === 'free' ? 'is-active' : ''} onClick={() => setFilter('free')}>
            Miễn phí
          </button>
          <button type="button" className={filter === 'paid' ? 'is-active' : ''} onClick={() => setFilter('paid')}>
            Có phí
          </button>
        </div>

        <div className="workouts-grid">
          {filteredWorkouts.map((workout) => (
            <article key={workout.id} className="workout-card">
              <div className="workout-card__media">
                <img src={workout.image} alt={workout.title} />
                {!workout.isFree ? (
                  <div className="workout-card__badge workout-card__badge--dark">
                    <Lock size={14} />
                    <span>{workout.price?.toLocaleString('vi-VN')}đ</span>
                  </div>
                ) : (
                  <div className="workout-card__badge workout-card__badge--free">MIỄN PHÍ</div>
                )}
              </div>

              <div className="workout-card__body">
                <div className="workout-card__meta">
                  <span>{workout.level}</span>
                  <span>{workout.duration}</span>
                  <span className="workout-card__rating">
                    <Star size={14} fill="currentColor" /> {workout.rating}
                  </span>
                </div>

                <h3>{workout.title}</h3>
                <p>{workout.description}</p>

                <button type="button" className="workout-card__button">
                  {workout.isFree ? (
                    <>
                      <Play size={16} /> Xem ngay
                    </>
                  ) : (
                    <>
                      <Download size={16} /> Mua ngay
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Workouts