import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const formData = new FormData(e.target);

    // converting to json
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // post request to server
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
