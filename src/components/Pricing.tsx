import React from 'react';
// import QuatationForm from './QuatationForm'; // Adjust the path accordingly
import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-white`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-red-500 border-b-4 border-red-500`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-red-500 w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          {items.map((plan, index) => (
            <div
              key={`pricing-plan-${index}`}
              className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-gray-800 text-white mt-4 border border-red-500`}
            >
              <div
                className={`flex-1 bg-gray-800 text-white rounded-t rounded-b-none overflow-hidden shadow`}
              >
                <div className={`p-8 text-3xl font-bold text-center border-b-4 border-red-500`}>
                  {plan.name}
                </div>
                <ul className={`w-full text-center text-sm`}>
                  {plan.features.map((feature, i) => (
                    <li
                      className={`border-b py-4`}
                      key={`${plan.name}-${i}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex-none mt-auto bg-gray-900 rounded-b rounded-t-none overflow-hidden shadow p-6`}
              >
                <div
                  className={`w-full pt-6 text-3xl font-bold text-center`}
                >
                  {plan.price}
                  <span className={`text-base`}> {plan.priceDetails}</span>
                </div>
                {/* Remove the "Get a Quotation" button */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Remove the QuatationForm component */}
    </section>
  );
};

export default Pricing;
