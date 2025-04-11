import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/profile.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      console.log("🧪 Access Token:", token); // Debug

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserInfo(res.data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="profile-page-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <img
              src={userInfo?.profilePicture || 'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg'}
              alt="Profile"
              className="profile-picture"
            />
            <h2>{userInfo?.username}</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li><a href="#overview">Your Account</a></li>
              <li><a href="#orders">Your Orders</a></li>
              <li><a href="#settings">Account Settings</a></li>
              <li><button onClick={handleLogout}>Sign Out</button></li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <section id="overview" className="section">
            <h2>Your Information</h2>
            <p>Email: {userInfo?.email}</p>
            <p>Username: {userInfo?.username}</p>
          </section>
          <section id="orders" className="section">
            <h2>Your Orders</h2>
            {/* Order details go here */}
          </section>
          <section id="settings" className="section">
            <h2>Account Settings</h2>
            {/* Settings form goes here */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
