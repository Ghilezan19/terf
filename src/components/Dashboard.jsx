import './Auth.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome! 🎉</h2>
        <p>You are successfully logged in</p>
        
        <div className="user-info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
