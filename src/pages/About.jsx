import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1>About Us</h1>
        <p className="lead">
          We are building the future of web applications with cutting-edge technology
        </p>
        
        <div className="about-content">
          <div className="about-card">
            <h2>Our Mission 🎯</h2>
            <p>
              To provide secure, fast, and beautiful web applications that empower users
              and businesses to achieve their goals. We believe in creating technology
              that is accessible, reliable, and user-friendly.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Technology 💻</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <strong>Frontend:</strong> React + Vite
              </div>
              <div className="tech-item">
                <strong>Backend:</strong> Node.js + Express
              </div>
              <div className="tech-item">
                <strong>Database:</strong> MongoDB Atlas
              </div>
              <div className="tech-item">
                <strong>Security:</strong> JWT + Bcrypt
              </div>
            </div>
          </div>

          <div className="about-card">
            <h2>Our Values 🌟</h2>
            <ul className="values-list">
              <li>Security First - Your data is always protected</li>
              <li>User Experience - Beautiful and intuitive design</li>
              <li>Performance - Lightning-fast loading times</li>
              <li>Innovation - Always improving and evolving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
