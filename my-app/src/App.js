import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const saveContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name,
      surname,
      phone,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName('');
    setSurname('');
    setPhone('');
    setShowForm(false);
  };

  const renderContacts = () => {
    return contacts.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
        <td>{contact.phone}</td>
        <td>
          <button onClick={() => deleteContact(contact.id)}>Видалити</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Список контактів</h2>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderContacts()}</tbody>
      </table>
      {showForm ? (
        <div>
          <h2>Форма контакту</h2>
          <form>
            <label>Ім'я:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Прізвище:</label>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <br />
            <label>Телефон:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br />
            <button type="button" onClick={saveContact}>Зберегти</button>
            <button type="button" onClick={() => setShowForm(false)}>Скасувати</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
    </div>
  );
};

export default Contacts;