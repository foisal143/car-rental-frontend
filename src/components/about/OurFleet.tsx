import React from 'react';
import { FaCar, FaStar, FaTruckPickup } from 'react-icons/fa';
import Container from '../container/Container';
import HeadingText from '../utils/HeadingText';

const OurFleet: React.FC = () => {
  const fleetData = [
    {
      title: 'Economy',
      description:
        'Affordable and fuel-efficient cars perfect for city drives.',
      icon: <FaCar className="text-4xl text-primary" />,
    },
    {
      title: 'Luxury',
      description:
        'Premium cars designed for comfort and a superior driving experience.',
      icon: <FaStar className="text-4xl text-primary" />,
    },
    {
      title: 'SUVs',
      description:
        'Spacious vehicles ideal for families or off-road adventures.',
      icon: <FaTruckPickup className="text-4xl text-primary" />,
    },
  ];

  return (
    <Container>
      <section className=" py-10 my-24 ">
        <div className="max-w-7xl mx-auto text-center">
          <HeadingText text="Our Fleet" />
          <p className="text-text font-text lg:w-1/2 mx-auto mt-5 mb-10">
            Explore our diverse selection of vehicles to suit every need, from
            affordable cars to luxury and family SUVs.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {fleetData.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 font-heading">
                  {item.title}
                </h3>
                <p className=" text-text font-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurFleet;
