import React from 'react';
import SkillsItem from '../components/SkillsItem';

const Skills = () => {
  console.log('skills');
  return (
    <section className='skills' id='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <div className='skills-items'>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/html-5--v1.png'
              alt=''
            />
            <h3>HTML5</h3>
          </SkillsItem>
          <SkillsItem>
            <img src='https://img.icons8.com/color/96/000000/css3.png' alt='' />
            <h3>CSS3</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/bootstrap.png'
              alt=''
            />
            <h3>Bootstrap</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/javascript--v1.png'
              alt=''
            />
            <h3>JavaScript</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/typescript.png'
              alt=''
            />
            <h3>TypeScript</h3>
          </SkillsItem>
          <SkillsItem>
            <img src='https://img.icons8.com/color/96/000000/git.png' alt='' />
            <h3>Git</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/react-native.png'
              alt=''
            />
            <h3>React</h3>
          </SkillsItem>
          <SkillsItem>
            <img
              src='https://img.icons8.com/color/96/000000/redux.png'
              alt=''
            />
            <h3>Redux</h3>
          </SkillsItem>
        </div>
      </div>
    </section>
  );
};

export default Skills;
