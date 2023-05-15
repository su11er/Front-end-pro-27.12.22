import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || phone === '') {
      setErrorMessage('Будь ласка, заповніть всі поля');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setErrorMessage('Будь ласка, введіть коректну електронну пошту');
      return;
    }

    const phoneRegex = /^\d{12}$/;
    if (!phone.match(phoneRegex)) {
      setErrorMessage('Будь ласка, введіть коректний телефонний номер (12 цифр)');
      return;
    }

    setErrorMessage('');
  };

  return (
    <div>
      <h1>Форма</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ім'я:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Електронна пошта:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Телефон:</label>
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default App;
