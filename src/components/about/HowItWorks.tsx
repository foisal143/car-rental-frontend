import Container from '../container/Container';
import { FaCar, FaCarSide, FaUser } from 'react-icons/fa';
import HeadingText from '../utils/HeadingText';

const HowItWorks = () => {
  return (
    <Container>
      <section className="bg-background py-12 mt-12">
        <div className="container mx-auto px-4">
          <HeadingText text="How It Works" />
          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-8">
            {/* Best Prices */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaCar className="text-primary text-4xl mb-4" />

              <h3 className="text-xl font-semibold font-heading mb-2">
                Select Car
              </h3>
              <p className="text-text font-text">
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
            {/* Wide Selection */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaUser className="text-primary text-4xl mb-4" />
              <h3 className="text-xl  font-semibold font-heading mb-2">
                Contact Operator
              </h3>
              <p className="text-text font-text">
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center  rounded-lg p-6 hover:shadow-lg transition">
              <FaCarSide className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold font-heading mb-2">
                Let's Drive
              </h3>
              <p className="text-text font-text">
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HowItWorks;
