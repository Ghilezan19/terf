import { useState } from 'react';
import './Pages.css';

const Profile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: 'Software developer and tech enthusiast',
    location: 'Bucharest, Romania',
    website: 'https://github.com'
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Here you would send update to backend
    console.log('Profile updated:', profileData);
    setEditing(false);
  };

  if (!user) {
    return (
      <div className="page-container">
        <div className="content-section">
          <h1>Please login to view your profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-section">
        <h1>My Profile</h1>
        
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-avatar">
              <div className="avatar-circle">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <button className="change-avatar-btn">Change Avatar</button>
            </div>
            
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-value">24</div>
                <div className="stat-label">Posts</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">156</div>
                <div className="stat-label">Followers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">89</div>
                <div className="stat-label">Following</div>
              </div>
            </div>
          </div>

          <div className="profile-main">
            <div className="profile-header">
              <h2>Profile Information</h2>
              <button 
                onClick={() => editing ? handleSave() : setEditing(true)}
                className="edit-btn"
              >
                {editing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="profile-form">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  disabled={!editing}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={profileData.website}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>

            <div className="profile-actions">
              <button className="danger-btn">Delete Account</button>
              <button className="secondary-btn">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
