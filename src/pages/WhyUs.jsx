import React from 'react';
import { 
  AccountCircle, 
  Lock,          
  TrendingUp,    
  ThumbUp        
} from '@mui/icons-material'; 

import './WhyUs.scss';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features">
        <div className="feature-card">
          <AccountCircle style={{ fontSize: 50, color: '#00c1d4' }} />
          <h3>Expert Management</h3>
          <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
        </div>

        <div className="feature-card">
          <Lock style={{ fontSize: 50, color: '#00c1d4' }} /> 
          <h3>Secure Investment</h3>
          <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
        </div>

        <div className="feature-card">
          <TrendingUp style={{ fontSize: 50, color: '#00c1d4' }} />
          <h3>Instant Trading</h3>
          <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
        </div>

        <div className="feature-card">
          <ThumbUp style={{ fontSize: 50, color: '#00c1d4' }} />
          <h3>Happy Customers</h3>
          <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
