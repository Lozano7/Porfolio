import React from 'react';
const img = require.context('../assets/img');
const Home = () => {
  const handleClick = () => {
    window.scroll({
      top: 600,
    });
  };
  console.log('home');
  return (
    <section className='home' id='home'>
      <div className='home-container'>
        <div className='home-photo animate__animated animate__flip'>
          <svg
            className='home-photo-container'
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='mask0' mask-type='alpha'>
              <path
                fill='#FF0044'
                d='M58.3,-59.7C73.3,-43.4,81.4,-21.7,81.1,-0.3C80.8,21.1,72.1,42.2,57.1,58C42.2,73.8,21.1,84.4,-0.3,84.7C-21.7,85,-43.4,75,-58.3,59.2C-73.1,43.4,-81.1,21.7,-81.9,-0.8C-82.7,-23.3,-76.3,-46.6,-61.4,-62.9C-46.6,-79.2,-23.3,-88.5,-0.8,-87.7C21.7,-86.9,43.4,-76,58.3,-59.7Z'
                transform='translate(100 100)'
              />
            </mask>
            <g mask='url(#mask0)'>
              <path
                fill='#FF0044'
                d='M58.3,-59.7C73.3,-43.4,81.4,-21.7,81.1,-0.3C80.8,21.1,72.1,42.2,57.1,58C42.2,73.8,21.1,84.4,-0.3,84.7C-21.7,85,-43.4,75,-58.3,59.2C-73.1,43.4,-81.1,21.7,-81.9,-0.8C-82.7,-23.3,-76.3,-46.6,-61.4,-62.9C-46.6,-79.2,-23.3,-88.5,-0.8,-87.7C21.7,-86.9,43.4,-76,58.3,-59.7Z'
                transform='translate(100 100)'
              />
              <image
                className='home-photo-img'
                x='32'
                y='20'
                xlinkHref={img('./profile.png')}
              />
            </g>
          </svg>
        </div>
        <div className='texts'>
          <h1>Hi, I am Anthony Lozano Portilla</h1>
          <h2> Front End Developer</h2>
          <p>
            I'm an enthusiast and passionate about Front End development that is
            focused on creating beautiful and functional user interfaces with
            functional, usable, accessible, optimal and reusable code.
          </p>
          <div className='social'>
            <a
              href='https://www.linkedin.com/in/anthony-lozano-portilla-757976210/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a
              href='https://github.com/Lozano7'
              target='_blank'
              rel='noreferrer'
            >
              <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='home-scroll'>
        <div className='mouse' onClick={handleClick}>
          <i className='bx bx-mouse'></i>
          <p>Scroll Down</p>
          <i className='bx bx-down-arrow-alt animate__animated animate__bounce'></i>
        </div>
      </div>
    </section>
  );
};

export default Home;
