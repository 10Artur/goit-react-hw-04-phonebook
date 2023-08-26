import {
  ContactsListBtn,
  ContactsListItem,
  ContactsListItems,
  ContactsListResetBtn,
} from './ContactsList.styled';

export const ContactsList = ({
  filteredContacts,
  onDeleteContact,
  onResetContactsFilter,
}) => {
  return (
    <ContactsListItems>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactsListBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContactsListBtn>
        </ContactsListItem>
      ))}
      <ContactsListResetBtn onClick={onResetContactsFilter}>
        Reset
      </ContactsListResetBtn>
    </ContactsListItems>
  );
};
