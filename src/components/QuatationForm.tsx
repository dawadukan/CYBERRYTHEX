import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form name="contact" data-netlify="true" method="post">
        {/* Hidden input for Netlify Forms to identify the form */}
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
