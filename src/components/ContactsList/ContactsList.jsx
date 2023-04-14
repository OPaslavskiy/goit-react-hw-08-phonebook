import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Notiflix from 'notiflix';

import {
  selectContacts,
  selectFilter,
  selectLoading,
  selectError,
} from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operation';

import { List, Item, Name } from './ContactsList.styled';

import Button from '@mui/material/Button';

import { BsFillTrashFill } from 'react-icons/bs';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (error) {
    Notiflix.Notify.failure(`Please reload the page. ${error} `);
  }

  return (
    <div>
      {loading ? (
        <div
          style={{ justifyContent: 'center', display: 'flex', height: '35px' }}
        >
          Loading contacts...
        </div>
      ) : (
        <h2
          style={{ justifyContent: 'center', display: 'flex', height: '35px' }}
        >
          Your contact list
        </h2>
      )}

      <List>
        {filterContact.map(({ name, phone, id }) => (
          <Item key={id}>
            <Name>{name}</Name>
            <p>{phone}</p>

            <Button
              sx={{ marginLeft: 7 }}
              variant="outlined"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
              startIcon={<BsFillTrashFill />}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
