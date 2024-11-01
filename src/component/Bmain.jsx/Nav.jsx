import React, { useState } from 'react';
import Modal from 'react-modal';
// import TaskModal from './TaskModal';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
// import { VscCollapseAll } from "react-icons/vsc";
// import { IoIosAdd } from "react-icons/io";
// import { IoIosMore } from "react-icons/io";
import '../style/nav.css';
import Div from './Div';





const getFormattedDate = () => {

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'short' });
  const year = today.getFullYear();

  const suffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // covers the "teen" days like 11th, 12th, etc.
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${suffix(day)} ${month}, ${year}`;
};




const Nav = ({ userName }) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailAdded, setEmailAdded] = useState(false);


  // const openModal = () => {
  //   setIsModalOpen(true);
  //   setEmail('');
  //   setEmailAdded(false);
  // };

  // for  add user from board
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddEmail = () => {
    if (email) {
      console.log(`Email added to board: ${email}`);
      setEmailAdded(true); // Show the confirmation message
    }
  };


  return (
    <div className='fixnav'>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <p className="logo">Welcome!{userName}</p>
        </div>
        <div className="navbar-right">
          <span>{getFormattedDate()}</span>
        </div>
      </nav>

      {/* Component Name and "This Week" Button */}
      <div className="content">
        <div className="component-name">
          <p className='board-h'>Board

            <span className='add-u'
              onClick={() => setIsModalOpen(true)}
            > <AiOutlineUsergroupAdd className='add-icon' />Add User</span>
          </p>
        </div>

        <div className="right-section">
          <select className="modal-trigger" >
            <option >Today </option>
            <option >This Week </option>
            <option >This Month </option>
          </select>

        </div>
      </div>

      {/* this modal for add-user icon  */}
      <Modal className="modal" isOpen={isModalOpen} onRequestClose={() => closeModal}>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              {!emailAdded ? (
                <>
                  <h2>Add people to the board</h2>
                  <input
                    type="email"
                    placeholder="Enter the email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="modal-buttons">
                    <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    <button className="add-email-btn" onClick={handleAddEmail}>Add Email</button>
                  </div>
                </>
              ) : (
                <>
                  <h2>{`${email} added to board`}</h2>
                  <button className="got-it-btn" onClick={closeModal}>Okay, got it!</button>
                </>
              )}
            </div>
          </div>
        )}

      </Modal>



      {/* ............................4 div  started here ........................................................*/}
      <Div/>












    </div >
  )
}

export default Nav