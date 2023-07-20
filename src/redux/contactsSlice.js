import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Cillian Murphy', number: '685-17-16' },
    { id: 'id-2', name: 'Robert John Downey Jr.', number: '483-79-10' },
    { id: 'id-3', name: 'Zendaya Maree Stoermer Coleman', number: '587-17-79' },
    { id: 'id-4', name: 'Channing Matthew Tatum', number: '507-14-26' },
    { id: 'id-5', name: 'Victoria Caroline Beckham', number: '187-11-14' },
  ],
};


const contactsSlice = createSlice({
  name: 'contacts', 
  initialState: phoneContacts, 
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); 
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, 
      };
    },removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;


export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);