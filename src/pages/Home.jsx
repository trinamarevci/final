import React, { useState } from 'react';
import './Home.scss';  
import backgroundImage from '../components/assets/images/slider-img.png'; 
import Services from './Services';
import About from './About'
import WhyUs from './WhyUs'; 
import Team from './Team';

function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="homepage">
      <section
        className="hero"
        style={{ 
          height: '521px', 
          position: 'relative', 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-content">
          <h2>CRYPTO CURRENCY</h2>
          <p>
            Explaining the importance of cryptocurrency in today's digital
            economy...
          </p>
          <button className="cta-btn" onClick={handleReadMore}>
            {showMore ? 'Show Less' : 'Read More'}
          </button>
          {showMore && (
            <div className="more-content">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
              </p>
            </div>
          )}
        </div>
      </section>
      <Services />
      <About />
      <WhyUs />
      <Team />
    </div>
  );
}

export default Home;
