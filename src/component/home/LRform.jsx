import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons
import group from "../../assets/Group.png"
import back from "../../assets/Back.png"
import '../style/register.css'

const LRform = () => {

    const [isLogin, setIsLogin] = useState(false); // Initially showing the registration form
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  // Function to toggle form
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowPassword(false); // Reset password visibility when switching forms
    setShowConfirmPassword(false);
  };






    return (
        <div className='container'>
            <div className='div1'>
                <img className='backimg' src={back} alt="image" />
                <img className='frontimg' src={group} alt="image" />
                <p className='p1'>Welcome aboard my friend</p>
                <p className='p2'>just a couple of clicks and we start</p>
            </div>
            {/* this above div is done with csss */}
            <div className='div2'>
            <div style={styles.container}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      {isLogin ? (
        // Login Form
        <div style={styles.form}>
          <div style={styles.inputContainer}>
            <FaEnvelope style={styles.icon} />
            <input type="email" placeholder="Email" style={styles.inputWithIcon} />
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={styles.inputWithIcon}
            />
            <span onClick={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button style={styles.submitButton}>Log in</button>
          <p style={styles.switchText}>
            Don't have an account? <span style={styles.switchLink} onClick={toggleForm}>Register</span>
          </p>
        </div>
      ) : (
        // Registration Form
        <div style={styles.form}>
          <div style={styles.inputContainer}>
            <FaUser style={styles.icon} />
            <input type="text" placeholder="Name" style={styles.inputWithIcon} />
          </div>
          <div style={styles.inputContainer}>
            <FaEnvelope style={styles.icon} />
            <input type="email" placeholder="Email" style={styles.inputWithIcon} />
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={styles.inputWithIcon}
            />
            <span onClick={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              style={styles.inputWithIcon}
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button style={styles.submitButton}>Register</button>
          <p style={styles.switchText}>
            Have an account? <span style={styles.switchLink} onClick={toggleForm}>Log in</span>
          </p>
        </div>
      )}
    </div>
            </div>

        </div>




    )
}




// Inline styles to match the image design and place icons inside input boxes
const styles = {
    container: {
      width: '300px',
      margin: '50px auto',
      padding: '20px',
      // textAlign: 'center',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '15px',
      width: 'fit-content',
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#666',
    },
    inputWithIcon: {
      padding: '10px 10px 10px 40px', // Padding to accommodate the icon inside
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
      width: '100%',
      fontSize: '14px',
    },
    eyeIcon: {
      position: 'absolute',
      right: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#666',
    },
    submitButton: {
      padding: '10px',
      backgroundColor: '#00C8D7',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    switchText: {
      marginTop: '10px',
      color: '#666',
    },
    switchLink: {
      color: '#00C8D7',
      cursor: 'pointer',
    }
  };
  

export default LRform
