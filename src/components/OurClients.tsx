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
            <img
              key={`client-${index}`}
              src={client.logo}
              alt={client.name}
              className="mx-4 my-4 w-1/4 h-auto object-contain" // Set width to 25%
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
