import React, { useState } from 'react';
import ContactForm from '../pages/ContactUs';
import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;

  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleContactUsButtonClick = (planName: React.SetStateAction<string>) => {
    setSelectedPlan(planName);
    setShowForm(!showForm);
  };

  return (
    <section className="bg-background py-8" id="pricing">
      <div className="container mx-auto px-2 pt-12 pb-12 text-white">
        <h1 className="w-full my-2  text-5xl font-bold leading-tight text-center text-red-500 border-b-4 border-red-500">
          {title}
        </h1>
        <div className="w-full mb-6">
          <div className="flex-1 bg-gray-800 text-white rounded-b-none overflow-hidden shadow"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {items.map((plan, index) => (
            <div
              key={`pricing-plan-${index}`}
              className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-gray-800 text-white mt-4 border border-red-500"
            >
              <div className="flex-1 bg-gray-800 text-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4 border-red-500">
                  {plan.name}
                </div>
                <ul className="w-full text-center text-sm">
                  {plan.features.map((feature, i) => (
                    <li className="border-b py-4" key={`${plan.name}-${i}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-none mt-auto bg-gray-900 rounded-b rounded-t-none overflow-hidden shadow p-6">
                <button
                  className="w-full mt-4 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600"
                  onClick={() => handleContactUsButtonClick(plan.name)}
                >
                  Get a Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render ContactForm component conditionally based on state */}
      {showForm && <ContactForm selectedPlan={selectedPlan} />}
    </section>
  );
};

export default Pricing;
