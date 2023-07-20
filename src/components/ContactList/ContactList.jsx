import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const filtredContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(removeContact());
  return (
    <List>
      {filtredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};
