import React from 'react'
import { VscCollapseAll } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import '../style/partion.css';

const Partion = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {/* Add wide content here that requires scrolling */}
        <div className="box1">
          <div>
            <p> Backlog
              <span> <VscCollapseAll /></span>
            </p>
          </div>
          
        </div>
        <div className="box2">
        <div>
            <p>To do
            <span>
               <IoIosAdd />
               <VscCollapseAll /></span>
            </p>
          </div>
        </div>
        <div className="box3">
        <div>
            <p>In progress
            <span> <VscCollapseAll /></span>
            </p>
          </div>
        </div>
        <div className="box4">
        <div>
            <p>Done</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Partion