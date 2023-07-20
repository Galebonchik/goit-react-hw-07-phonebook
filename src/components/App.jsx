import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { TelephoneBook, Title } from './App.styled';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <TelephoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Title>Your phonebook is empty. Add first contact!</Title>
      )}
      {contacts.length > 0 && <ContactList />}
    </TelephoneBook>
  );
}
