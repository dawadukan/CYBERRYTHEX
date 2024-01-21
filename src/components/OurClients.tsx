// OurClients.tsx
import React from 'react';
import config from '../config/index.json';

const OurClients = () => {
  const { clients } = config;

  return (
    <section className={`bg-background py-8`} id="our-clients">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-gray-700`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Our Clients
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-borderdark w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div className={`flex flex-wrap justify-center pt-12 my-12 sm:my-4`}>
          {clients.map((client, index) => (
            <div
              key={`client-${index}`}
              className={`flex flex-col w-full sm:w-5/6 md:w-1/2 lg:w-1/3 mx-auto mt-4`}
            >
              <div
                className={`flex-1 bg-background rounded-t overflow-hidden shadow`}
              >
                <div
                  className={`w-full p-8 text-3xl font-bold text-center text-primary`}
                >
                  {client.name}
                </div>
                <div className={`w-full text-center text-base font-bold py-4`}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-48 h-48 object-contain mx-auto" // Change the size here
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
