import { Check } from 'lucide-react';

interface MembershipPlan {
  id: number;
  name: string;
  price: number;
  period: string;
  popular?: boolean;
  features: string[];
  color: string;
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
];

export default function Memberships() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Các gói tập luyện</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Chọn gói phù hợp với mục tiêu và ngân sách của bạn
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  PHÔ BIẾN NHẤT
                </div>
              )}

              <div className={`bg-gradient-to-r ${plan.color} text-white p-6`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price.toLocaleString('vi-VN')}</span>
                  <span className="text-lg">đ</span>
                </div>
                <p className="text-sm opacity-90 mt-1">{plan.period}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Chưa chắc chắn nên chọn gói nào?</h3>
          <p className="text-gray-600 mb-6">
            Liên hệ với chúng tôi để được tư vấn miễn phí về gói tập phù hợp nhất
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Liên hệ tư vấn
          </button>
        </div>
      </div>
    </div>
  );
}
