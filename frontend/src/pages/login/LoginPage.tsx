import { useState, type FormEvent } from 'react'
import { Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-hero" aria-label="Giới thiệu đăng nhập">
        <Link to="/" className="login-brand-link" aria-label="Về trang chủ Gym Equipment Store">
          <div className="login-brand-link__mark" aria-hidden="true">
            <Dumbbell />
          </div>
          <div className="login-brand-link__text">
            <strong>IRON FITNESS</strong>
            <span>Gym Equipment Store</span>
          </div>
        </Link>
        <div className="login-brand">
          <p className="eyebrow">Personal training dashboard</p>
          <h1>Quản lý phòng tập, thiết bị và đơn hàng trong một nơi.</h1>
          <p className="hero-copy">
            Giao diện đăng nhập dành cho vận hành cửa hàng thiết bị gym với cảm
            giác mạnh mẽ, rõ ràng và tối ưu cho công việc hằng ngày.
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-main">
            <span className="hero-card-tag">Active today</span>
            <strong>Training plan overview</strong>
            <div className="visual-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="hero-metrics">
            <article className="metric-card">
              <span>120+</span>
              <p>Thiết bị trong kho</p>
            </article>
            <article className="metric-card accent">
              <span>24/7</span>
              <p>Hỗ trợ đơn hàng</p>
            </article>
            <article className="metric-card">
              <span>98%</span>
              <p>Tỷ lệ xử lý đúng</p>
            </article>
          </div>
        </div>
      </section>

      <section className="login-panel" aria-label="Biểu mẫu đăng nhập">
        <div className="panel-glow" aria-hidden="true" />
        <header className="panel-header">
          <p className="eyebrow">Welcome back</p>
          <h2>Đăng nhập</h2>
          <p>Nhập thông tin tài khoản để tiếp tục vào hệ thống quản lý.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="field">
            <span>Mật khẩu</span>
            <div className="password-row">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Nhập mật khẩu"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                type="button"
                className="ghost-button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
          </label>

          <div className="form-row">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Ghi nhớ đăng nhập</span>
            </label>

            <Link to="/" className="forgot-link">
              Quên mật khẩu?
            </Link>
          </div>

          <button className="primary-button" type="submit">
            Đăng nhập hệ thống
          </button>

          <div className="divider">
            <span>hoặc</span>
          </div>

          <div className="social-actions">
            <button type="button" className="secondary-button">
              Tiếp tục với Google
            </button>
            <button type="button" className="secondary-button">
              Tiếp tục với GitHub
            </button>
          </div>

          <p className="footer-note">
            Chưa có tài khoản? <Link to="/">Liên hệ quản trị viên</Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage