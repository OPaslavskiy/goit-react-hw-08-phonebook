import React from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import { FilterDiv } from './FindContactsImput.styled';

import TextField from '@mui/material/TextField';

export const FindContactsInput = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ justifyContent: 'center', display: 'flex' }}>
        Find a contact
      </h2>
      <FilterDiv>
        <TextField
          fullWidth
          name="filter"
          variant="standard"
          label="Find contacts by name..."
          type="text"
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        />
      </FilterDiv>
    </div>
  );
};
