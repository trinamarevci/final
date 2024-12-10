import React from 'react';
import { AccountBalanceWallet, Security, SupportAgent } from '@mui/icons-material';
import './index.scss';  

const CardLayout = () => {
  return (
    <div className="containers">
      <h2>Our <i className='Services'>Services</i></h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
      <div className="card-container">
        <div className="card">
          <AccountBalanceWallet style={{ fontSize: 50, color: '#00c1d4' }} />
          <h3>Currency Wallet</h3>
          <p>Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        </div>
        <div className="card">
          <Security style={{ fontSize: 50, color: '#00c1d4' }} />
          <h3>Security Storage</h3>
          <p>Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        </div>

        <div className="card">
          <SupportAgent style={{ fontSize: 50, color: '#00c1d4' }} /> 
          <h3>Expert Support</h3>
          <p>Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
