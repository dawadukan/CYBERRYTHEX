import React from 'react'

import config from '../config/index.json'

const Pricing = () => {
  const { pricing } = config
  const { title, categories } = pricing

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-gray-700`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-borderdark w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div className={`flex flex-wrap justify-center pt-12 my-12 sm:my-4`}>
          {categories.map((category, index) => (
            <div
              key={`pricing-category-${index}`}
              className={`flex flex-col w-full sm:w-5/6 md:w-1/2 lg:w-1/3 mx-auto mt-4`}
            >
              <div
                className={`flex-1 bg-background rounded-t overflow-hidden shadow`}
              >
                <div
                  className={`w-full p-8 text-3xl font-bold text-center text-primary`}
                >
                  {category.name}
                </div>
                <ul className={`w-full text-center text-base font-bold`}>
                  {category.plans.map((plan, i) => (
                    <li
                      className={`py-4`} // Removed border-b here
                      key={`${category.name}-${i}`}
                    >
                      <strong>{plan.name}</strong>: {plan.priceRange} (
                      {plan.description})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
