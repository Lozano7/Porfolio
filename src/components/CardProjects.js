import React from 'react';

const CardProjects = ({ name, description, img, url, urlGitHub }) => {
  return (
    <div className='card'>
      <a className='card-image' href={url} target='_blank' rel='noreferrer'>
        <img
          src={img || 'https://source.unsplash.com/random/400x300'}
          alt='project'
        />
      </a>
      <div className='card-content'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='links'>
          <a href={urlGitHub} target='_blank' rel='noopener noreferrer'>
            Code <i className='bx bx-code-alt'></i>
          </a>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Page <i className='bx bx-layout'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
