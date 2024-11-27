import { FaDollarSign, FaCarAlt, FaHeadset } from 'react-icons/fa';
import Container from '../container/Container';

const WhyChoseUs = () => {
  return (
    <Container>
      <section className="bg-background py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Best Prices */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaDollarSign className="text-primary text-4xl mb-4" />

              <h3 className="text-xl font-semibold font-heading mb-2">
                Best Prices
              </h3>
              <p className="text-text font-text">
                We offer the most competitive prices without compromising
                quality.
              </p>
            </div>
            {/* Wide Selection */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaCarAlt className="text-primary text-4xl mb-4" />
              <h3 className="text-xl  font-semibold font-heading mb-2">
                Wide Selection
              </h3>
              <p className="text-text font-text">
                Choose from a variety of cars to suit all your travel needs.
              </p>
            </div>
            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaHeadset className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold font-heading mb-2">
                24/7 Support
              </h3>
              <p className="text-text font-text">
                Our customer service team is here to assist you anytime,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChoseUs;
