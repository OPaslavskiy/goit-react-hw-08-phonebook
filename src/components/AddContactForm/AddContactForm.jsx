import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { object, string } from 'yup';
import Notiflix from 'notiflix';

import { addContact } from '../../redux/operation';
import { selectContacts, selectError } from '../../redux/selectors';

import { FormSection } from './AddContactForm.styled';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const phoneRegExp = /^\+?\d{1,4}[-\d\s()]*\d{1,4}$/;

export const AddContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    setFormData({
      name: '',
      phone: '',
    });

    const isName = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isName) {
      Notiflix.Notify.info(`${formData.name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(formData));
    }
  };

  if (error) {
    Notiflix.Notify.failure(`${error}`);
  }

  return (
    <div>
      <h2 style={{ justifyContent: 'center', display: 'flex' }}>
        Create a contact
      </h2>

      <FormSection>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={event =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
          <TextField
            margin="normal"
            variant="standard"
            required
            fullWidth
            name="phone"
            label="Phone"
            // type="tel"
            id="phone"
            value={formData.phone}
            onChange={event =>
              setFormData({ ...formData, phone: event.target.value })
            }
            InputProps={{ pattern: phoneRegExp }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </FormSection>
    </div>
  );
};
