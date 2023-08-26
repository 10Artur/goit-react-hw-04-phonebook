import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { AppTitle1, AppTitle2, Container, GlobalStyle } from './GlobalStyle';

const localStorageKey = 'contacts';

const basicFilters = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      return JSON.parse(savedFilters);
    }
    return basicFilters;
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const resetContactsFilter = () => setContacts(basicFilters);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeContactFilter = event => setFilter(event.target.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <AppTitle1>Phonebook</AppTitle1>
      <ContactForm onAddContact={addContact} />
      <AppTitle2>Contacts</AppTitle2>
      <Filter onChangeContactFilter={changeContactFilter} value={filter} />
      <ContactsList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
        onResetContactsFilter={resetContactsFilter}
      />
      <GlobalStyle />
    </Container>
  );
};
