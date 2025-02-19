import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a login process
    if (username && password) {
      // Perform login logic here (e.g., API call, authentication, etc.)
      const token = 'yourAuthToken'; // Simulated token
      onLogin(token); // Call the onLogin function passed from AppContent
      navigate('/'); // Redirect to home page after login
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

 // <-- Add this line to fix the issue


 
 function SignUpPage() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
 
   const validateForm = () => {
     if (!username.trim()) {
       setErrorMessage('Username is required.');
       return false;
     }
     if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
       setErrorMessage('Valid email is required.');
       return false;
     }
     if (password.length < 6) {
       setErrorMessage('Password must be at least 6 characters.');
       return false;
     }
     if (password !== confirmPassword) {
       setErrorMessage('Passwords do not match.');
       return false;
     }
     return true;
   };
 
   const handleSignup = async (e) => {
     e.preventDefault();
     if (!validateForm()) return;
 
     setIsLoading(true);
 
     try {
       await new Promise((resolve) => setTimeout(resolve, 1000));
 
       // Retrieve existing users
       const users = JSON.parse(localStorage.getItem('users')) || [];
 
       // Check if the email is already registered
       if (users.some((user) => user.email === email)) {
         setErrorMessage('Email already registered. Try logging in.');
         setIsLoading(false);
         return;
       }
 
       // Add the new user to the users array
       const newUser = { username, email, password };
       users.push(newUser);
 
       // Save back to localStorage
       localStorage.setItem('users', JSON.stringify(users));
 
       alert('Signup successful! Redirecting to login...');
       navigate('/login'); // Redirect to login page
     } catch (error) {
       setErrorMessage('An error occurred. Please try again.');
     } finally {
       setIsLoading(false);
     }
   };
 
   return (
     <div className="auth-page">
       <h2>Sign Up</h2>
       <form onSubmit={handleSignup}>
         <div className="form-group">
           <label htmlFor="username">Username:</label>
           <input
             type="text"
             id="username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             required
             disabled={isLoading}
           />
         </div>
 
         <div className="form-group">
           <label htmlFor="email">Email:</label>
           <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             disabled={isLoading}
           />
         </div>
 
         <div className="form-group">
           <label htmlFor="password">Password:</label>
           <input
             type={showPassword ? 'text' : 'password'}
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
             disabled={isLoading}
           />
         </div>
 
         <div className="form-group">
           <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
             type={showPassword ? 'text' : 'password'}
             id="confirmPassword"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             required
             disabled={isLoading}
           />
         </div>
 
         <div className="form-group">
           <input
             type="checkbox"
             id="showPassword"
             checked={showPassword}
             onChange={() => setShowPassword(!showPassword)}
           />
           <label htmlFor="showPassword">Show Password</label>
         </div>
 
         {errorMessage && <div className="error-message">{errorMessage}</div>}
 
         <button type="submit" disabled={isLoading}>
           {isLoading ? 'Signing up...' : 'Sign Up'}
         </button>
       </form>
 
       <p className="switch-link">
         Already have an account? <a href="/login">Sign In</a>
       </p>
     </div>
   );
 }
 
 
export { LoginPage, SignUpPage };
