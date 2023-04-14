import React from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from '../GlobalStyle';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FindContactsInput } from './FindContactsImput/FindContactsImput';
import { AppBar } from './AppBar/AppBar';

import { CreateDiv } from './App.styled';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Layout>
        <GlobalStyle />

        <CreateDiv>
          <div>
            <AddContactForm />
            <FindContactsInput />
          </div>
          <ContactsList />
        </CreateDiv>
      </Layout>
    </div>
  );
};
