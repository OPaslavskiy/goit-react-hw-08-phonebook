import React from 'react';
import { Link } from './AboutProject.styled';

const AboutProject = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>
        This application is made for people who want to have all their friends'
        numbers in one place.
      </h3>
      <p>
        I am the developer of this website. My name Oleh.{' '}
        <a href="https://github.com/OPaslavskiy">This is my page on GitHub.</a>{' '}
        I hope you enjoy using it, if you haven't been here before - go ahead
        and register, and happiness will be yours!
      </p>

      <Link to="/contacts">Welcome! Your BEST contacts</Link>
    </div>
  );
};

export default AboutProject;
