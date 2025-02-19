import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage({ onLogout }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Show confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      onLogout(); // Call logout function
      localStorage.removeItem('username'); // Remove username from storage
      navigate('/login'); // Redirect to login
    } else {
      navigate(-1); // Go back if the user cancels
    }
  }, [onLogout, navigate]);

  return (
    <div className="logout-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      {username && <h3>Welcome, {username}!</h3>} {/* Show username above logout button */}
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}

export { LogoutPage };
