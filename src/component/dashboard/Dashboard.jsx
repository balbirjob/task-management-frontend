import React,{ useState } from 'react'
import Sidebar from './Sidebar';
import Board from './Board';
import Analytics from './Analytics';
import Setting from './Setting';
import '../style/dashboard.css';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  // Function to update the currently active component
  const handleMenuClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Board':
           return <Board />;
      case 'Analytics':
        return <Analytics />;
      case 'Setting':
        return <Setting />;
      
      default:
        return <Board />;
    }
  };


  return (
    <>

    <div className="app">
      <Sidebar onMenuClick={handleMenuClick} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
   
    
  
    
    </>
  )
}

export default Dashboard
