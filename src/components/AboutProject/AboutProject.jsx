import React from 'react';
import { Link, Contacts } from './AboutProject.styled';
import phonebook from '../../image/3455271.png';

const AboutProject = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>
        This application is made for people who want to have all their friends'
        numbers in one place.
      </h3>
      <Contacts>
        <Link to="/contacts">Welcome! Your BEST contacts here...</Link>
        <Link to="/contacts">
          <img
            style={{ display: 'inline-block' }}
            src={phonebook}
            alt="contactsBook"
            width={200}
            height={100}
          />
        </Link>
      </Contacts>
      <p style={{ marginTop: '20px' }}>
        I am the developer of this website. My name Oleh.
      </p>
      <a href="https://github.com/OPaslavskiy">This is my page on GitHub.</a>{' '}
      <p>
        I hope you enjoy using it, if you haven't been here before - go ahead
        and register, and happiness will be yours!
      </p>
    </div>
  );
};

export default AboutProject;
