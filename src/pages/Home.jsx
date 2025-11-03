import { Link } from 'react-router-dom';
import './Pages.css';

const Home = ({ user }) => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to TerfSite 🚀</h1>
        <p className="hero-subtitle">
          Your complete authentication and content management platform
        </p>
        
        {user ? (
          <div className="hero-welcome">
            <h2>Hello, {user.username}! 👋</h2>
            <p>You are logged in and ready to explore!</p>
            <Link to="/dashboard" className="cta-button">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="hero-actions">
            <Link to="/register" className="cta-button primary">
              Get Started
            </Link>
            <Link to="/login" className="cta-button secondary">
              Login
            </Link>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Industry-standard security with JWT and bcrypt encryption</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built with modern technologies for optimal performance</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Clean, modern UI with smooth animations</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Works perfectly on all devices and screen sizes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
