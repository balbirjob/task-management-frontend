import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaTasks, FaSignOutAlt } from 'react-icons/fa';
import { GoDatabase } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import '../style/sidbar.css';
import mlogo from "../../assets/mainlogo.png"
// ************************************************************

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Sidebar = ({ onMenuClick }) => {

  const [visibale, setVisibale] = useState(false);






  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={mlogo} alt="dashbordLogo" className='mlogo' />
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        <button onClick={() => onMenuClick('Board')}>
          <FaTasks className="icon" /> Board
        </button>
        <button onClick={() => onMenuClick('Analytics')}>
          <GoDatabase className="icon" /> Analytics
        </button>
        <button onClick={() => onMenuClick('Setting')}>
          <CiSettings className="icon" /> Setting
        </button>
      </div>

      {/* Logout */}
      <div className="logout">
        <button onClick={() => setVisibale(true)}>
          <FaSignOutAlt className="icon" /> Logout
        </button>

        {/* modal page  below here */}

        <Modal style={customStyles} isOpen={visibale} onRequestClose={() => setVisibale(false)} >

          <div className="modaldiv">



            <div className="container">
              <p className="heading">Are you sure you want to Logout?</p>
              <button className="btn1">Yes, Logout</button>
              <button className="btn2" onClick={() => setVisibale(false)}>Cancel</button>
            </div>

          </div>




        </Modal>
      </div>
    </div>

  )
}

export default Sidebar
