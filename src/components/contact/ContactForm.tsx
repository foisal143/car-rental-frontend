import React from 'react';
import Container from '../container/Container';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <Container>
      <section className="mb-24 px-5 ">
        <div className="  grid lg:grid-cols-2  gap-10">
          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-4xl font-heading font-semibold">Contact Us</h2>
            <p className="text-lg text-text font-text  my-6">
              We'd love to hear from you! Whether you have a question, feedback,
              or just want to say hello, feel free to reach out to us. Fill out
              the form, and we'll get back to you as soon as possible.
            </p>
            <p className="text-lg  text-text font-text">
              <strong className="text-black">Email:</strong> <br />{' '}
              contact@carrental.com
            </p>
            <p className="text-lg text-text font-text">
              <strong className="text-black">Phone:</strong> <br /> +1 (800)
              123-4567
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white  rounded-md p-5 border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary placeholder-gray-500"
                />
              </div>

              <div>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary placeholder-gray-500"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ContactForm;
