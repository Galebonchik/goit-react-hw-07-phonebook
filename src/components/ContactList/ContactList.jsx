import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const filtredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
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
