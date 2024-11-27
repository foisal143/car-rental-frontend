import { useState } from 'react';
import Container from '../container/Container';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What documents are required to rent a car?',
      answer:
        'You need to provide a valid driver’s license, a government-issued ID, and a credit card for the rental process.',
    },
    {
      question: 'Is there a minimum age to rent a car?',
      answer:
        'Yes, the minimum age is typically 21 years. Drivers under 25 may be subject to additional fees.',
    },
    {
      question: 'Can I return the car to a different location?',
      answer:
        'Yes, you can. However, additional fees may apply for one-way rentals. Please confirm with our team.',
    },
    {
      question: 'What happens if I return the car late?',
      answer:
        'Late returns may incur additional charges. We recommend contacting us if you anticipate a delay in returning the car.',
    },
  ];

  return (
    <Container>
      <section className=" py-10 px-5">
        <div className=" grid lg:grid-cols-2 items-center gap-10">
          {/* Image Section */}
          <div>
            <img
              src="https://st2.depositphotos.com/3643473/6063/i/450/depositphotos_60638279-stock-photo-person-with-button-frequently-asked.jpg"
              alt="FAQ Illustration"
              className="rounded-lg lg:w-2/3 mx-auto"
            />
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-center lg:text-left">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 font-text">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden border ${
                    activeIndex === index
                      ? 'bg-primary text-white'
                      : 'bg-base-200'
                  }`}
                >
                  <button
                    className="text-lg font-semibold px-5 py-3 w-full flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <FaChevronUp className="text-xl" />
                    ) : (
                      <FaChevronDown className="text-xl" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="px-5 py-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FAQSection;
