import React, { useState } from 'react';
import './index.scss';  

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='container'>
      <h2>About <i className='us'>Us</i></h2>
      <br />
      <p>Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus</p>
      <div className='description'>
        <br />
        <h2>We Are Finexo</h2>
        <br />
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
          Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
        </p>
        <br />
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
    </div>
  );
};

export default Index;
