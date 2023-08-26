import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: basicFilters,
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      this.setState({
        contacts: JSON.parse(savedFilters),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevFilters } = prevState;
    const { contacts: nextFilters } = this.state;

    if (prevFilters !== nextFilters) {
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  resetContactsFilter = () => {
    this.setState({
      contacts: basicFilters,
    });
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeContactFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Container>
        <AppTitle1>Phonebook</AppTitle1>
        <ContactForm onAddContact={this.addContact} />
        <AppTitle2>Contacts</AppTitle2>
        <Filter
          onChangeContactFilter={this.changeContactFilter}
          value={this.state.filter}
        />
        <ContactsList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
          onResetContactsFilter={this.resetContactsFilter}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
