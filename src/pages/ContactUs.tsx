import React, { FC } from 'react';

interface ContactFormProps {
  selectedPlan: string;
}

const ContactForm: FC<ContactFormProps> = ({ selectedPlan }) => {
  return (
    <div className="max-w-md mx-auto bg-background text-white p-6 rounded-md shadow-lg border border-red-500">
      <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">GET A Quotation</h2>
      <form
        name="contact-form"
        method="POST"
        action="contact/?success=true"
        data-netlify="true"
        id="contact-form"
      >
        <input type="hidden" name="form-name" value="contact-form" />

        <label htmlFor="name" className="block text-sm font-bold mb-2 text-primary">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className="w-full p-3 rounded-md border border-red-500 text-white bg-background"
        />

        <label htmlFor="company" className="block text-sm font-bold mt-4 mb-2 text-primary">
          Company *
        </label>
        <input
          id="company"
          name="company"
          required
          type="text"
          className="w-full p-3 rounded-md border border-red-500 text-white bg-background"
        />

        <label htmlFor="email" className="block text-sm font-bold mt-4 mb-2 text-primary">
          Email *
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          className="w-full p-3 rounded-md border border-red-500 text-white bg-background"
        />

        <label htmlFor="mobile" className="block text-sm font-bold mt-4 mb-2 text-primary">
          Mobile No. *
        </label>
        <input
          id="mobile"
          name="mobile"
          required
          type="tel" // Use 'tel' type for phone numbers
          className="w-full p-3 rounded-md border border-red-500 text-white bg-background"
        />

        <label htmlFor="plan" className="block text-sm font-bold mt-4 mb-2 text-primary">
          Selected Plan
        </label>
        <input
          id="plan"
          name="plan"
          type="text"
          value={selectedPlan}
          readOnly
          className="w-full p-3 rounded-md border border-red-500 text-white bg-background"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white py-3 rounded-md hover:bg-secondary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
