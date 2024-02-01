import React, { useState, useRef } from 'react';
import ContactForm from '../pages/ContactUs';
import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;

  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Use a div element as a ref for scrolling
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleContactUsButtonClick = (planName: string) => {
    setSelectedPlan(planName);
    setShowForm(!showForm);

    // Scroll to the ContactForm component when the button is clicked
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-background py-8" id="pricing">
      <div className="container mx-auto px-2 pt-12 pb-12 text-white">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-red-500 border-b-4 border-red-500">
          {title}
        </h1>
        <div className="w-full mb-6">
          <div className="flex-1 bg-gray-800 text-white rounded-b-none overflow-hidden shadow"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((plan, index) => (
            <div
              key={`pricing-plan-${index}`}
              className="flex flex-col rounded-lg bg-gray-800 text-white border border-red-500"
            >
              <div className="p-8 text-3xl font-bold text-center border-b-4 border-red-500">
                {plan.name}
              </div>
              <p className="py-4 text-center text-sm">{plan.description}</p>
              <ul className="w-full text-center text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    className="border-b py-4"
                    key={`${plan.name}-${i}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex-none mt-auto bg-gray-900 rounded-b rounded-t-none overflow-hidden shadow p-6">
                <button
                  className="w-full mt-4 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 ease-in-out"
                  onClick={() => handleContactUsButtonClick(plan.name)}
                >
                  Get a Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use a div element as a ref for scrolling */}
      <div ref={contactFormRef}></div>

      {/* Render ContactForm component conditionally based on state */}
      {showForm && <ContactForm selectedPlan={selectedPlan} />}
    </section>
  );
};

export default Pricing;
