import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  ContactsError,
  ContactsField,
  ContactsForm,
  ContactsLabel,
  ContactsBtn,
} from './ContactsForm.styled';

const ContactsFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  number: Yup.string().min(10).max(12).required('Number is required!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsFormSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <ContactsForm>
        <ContactsLabel>
          Name
          <ContactsField
            type="text"
            name="name"
            placeholder="Enter your name..."
          />
          <ContactsError component="div" name="name" />
        </ContactsLabel>

        <ContactsLabel>
          Number
          <ContactsField
            type="tel"
            name="number"
            placeholder="Enter your number..."
          />
          <ContactsError component="div" name="number" />
        </ContactsLabel>

        <ContactsBtn type="submit">Add contact</ContactsBtn>
      </ContactsForm>
    </Formik>
  );
};
