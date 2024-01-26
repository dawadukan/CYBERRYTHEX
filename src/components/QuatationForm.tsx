// QuatationForm.tsx
import React, { useState } from 'react';

const QuatationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here

    // Optional: Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form
      name="contact-form" // Specify a unique form name
      method="POST"
      action="/success" // Specify the success page (you can customize this)
      data-netlify="true" // Enable Netlify Forms
      onSubmit={handleSubmit}
    >
      {/* Hidden input for Netlify Forms to identify the form */}
      <input type="hidden" name="form-name" value="contact-form" />

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuatationForm;
