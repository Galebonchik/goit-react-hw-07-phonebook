import React from 'react';

import { ListItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => (
  <ListItem>
    {name} : {number}
    <DeleteButton
      type="button"
      name="delete"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </DeleteButton>
  </ListItem>
);
