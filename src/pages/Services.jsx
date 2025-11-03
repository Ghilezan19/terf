import './Pages.css';

const Services = () => {
  const services = [
    {
      icon: '🔐',
      title: 'User Authentication',
      description: 'Secure login and registration system with JWT tokens and password encryption',
      features: ['JWT Authentication', 'Password Hashing', 'Session Management', 'Remember Me']
    },
    {
      icon: '👤',
      title: 'User Management',
      description: 'Complete user profile management with customizable settings',
      features: ['Profile Editing', 'Avatar Upload', 'Email Verification', 'Account Settings']
    },
    {
      icon: '📊',
      title: 'Dashboard Analytics',
      description: 'Real-time analytics and insights dashboard for your account',
      features: ['Activity Tracking', 'Usage Statistics', 'Data Visualization', 'Reports']
    },
    {
      icon: '🔔',
      title: 'Notifications',
      description: 'Stay updated with real-time notifications and alerts',
      features: ['Email Notifications', 'Push Notifications', 'Custom Alerts', 'Activity Feed']
    },
    {
      icon: '💾',
      title: 'Data Storage',
      description: 'Secure cloud storage for your data with MongoDB',
      features: ['Cloud Storage', 'Data Backup', 'Encryption', 'Data Recovery']
    },
    {
      icon: '🛡️',
      title: 'Security',
      description: 'Enterprise-level security features to protect your account',
      features: ['2FA Authentication', 'IP Monitoring', 'Security Logs', 'Breach Detection']
    }
  ];

  return (
    <div className="page-container">
      <div className="content-section">
        <h1>Our Services</h1>
        <p className="lead">
          Comprehensive solutions for all your web application needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
