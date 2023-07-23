import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts?.length === 0 ? (
          <p>Haven't got contacts. Please, add contact </p>
        ) : (
          <Filter />
        )}
        {contacts?.length > 0 && <ContactList />}
      </div>
    </>
  );
};
