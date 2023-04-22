import React from 'react';

import { AddContactForm } from '../AddContactForm/AddContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FindContactsInput } from '../FindContactsImput/FindContactsImput';

import { CreateDiv } from './ContactsPage.styled';
const ContactsPage = () => {
  return (
    <CreateDiv>
      <div>
        <AddContactForm />
        <FindContactsInput />
      </div>
      <ContactsList />
    </CreateDiv>
  );
};

export default ContactsPage;
