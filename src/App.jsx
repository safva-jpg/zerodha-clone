import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">ZERODHA</a>

        <div className="nav-links">
          <a href="#signup">Signup</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#support">Support</a>
          <button className="menu-button" aria-label="Menu">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero" id="about">
          <div className="hero-image">
            <img
              src="https://zerodha.com/static/images/landing.png"
              alt="Zerodha trading platform illustration"
            />
          </div>

          <h1>Invest in everything</h1>
          <p>
            Online platform to invest in stocks,
            derivatives, mutual funds, and more.
          </p>

          <a href="#signup" className="primary-button">
            Sign up for free
          </a>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <div className="trust-text">
            <h2>Trust with confidence</h2>
            <h3>Customer-first always</h3>
            <p>
              Our technology and support help investors
              access financial markets with confidence.
            </p>

            <h3>No spam or gimmicks</h3>
            <p>
              Enjoy a simple platform designed to keep
              your investing experience clear and easy.
            </p>

            <h3>The Zerodha ecosystem</h3>
            <p>
              Explore tools designed for investing,
              learning, and tracking your portfolio.
            </p>
          </div>

          <div className="trust-image">
            <img
              src="https://zerodha.com/static/images/ecosystem.png"
              alt="Zerodha ecosystem"
            />
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section" id="products">
          <h2>Explore our products</h2>
          <p>
            Everything you need to invest and manage
            your portfolio in one place.
          </p>

          <div className="product-grid">
            <article className="product-card">
              <h3>Kite</h3>
              <p>
                A powerful platform to trade and track
                financial markets.
              </p>
            </article>

            <article className="product-card">
              <h3>Console</h3>
              <p>
                Track your investments and review your
                portfolio performance.
              </p>
            </article>

            <article className="product-card">
              <h3>Coin</h3>
              <p>
                Discover and manage your mutual fund
                investments.
              </p>
            </article>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <h2>Simple and transparent pricing</h2>
          <p>
            Explore a straightforward investing experience
            with clear pricing information.
          </p>
        </section>

        {/* Signup Section */}
        <section className="signup-section" id="signup">
          <h2>Open your account today</h2>
          <p>
            Start exploring a simple online investing platform.
          </p>
          <a href="#about" className="primary-button">
            Get started
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="support">
        <div>
          <a href="#" className="logo">ZERODHA</a>
          <p>
            © 2026 Zerodha Clone — Student Project
          </p>
        </div>

        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#support">Contact</a>
          <a href="#support">Help Centre</a>
        </div>
      </footer>
    </div>
  )
}

export default App