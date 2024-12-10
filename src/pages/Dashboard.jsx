import React from 'react';
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';  // Correct path
import './Dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');  
  };

  return (
    <div className="dashboard-container">
    <p>Hello, this is the Dashboard</p>
    <br />
    <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
  </div>
     
     
   
  );
};

export default Dashboard;
