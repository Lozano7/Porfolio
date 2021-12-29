import React from 'react';
import CardProjects from '../components/CardProjects';
import data from '../data.json';
const Projects = () => {
  console.log(data);
  return (
    <section className='projects' id='projects'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {data.Apps.map((project) => (
          <CardProjects
            {...project}
            key={project.name + Math.floor(Math.random * 1000)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
