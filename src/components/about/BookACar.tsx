import { FaPhone } from 'react-icons/fa';
import Container from '../container/Container';

const BookACar = () => {
  return (
    <section
      className="relative my-24 bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZN7n3s6G2xE0h40ni27bMYFSMJqtMfdvUQ&s')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      <Container>
        <div className="relative flex justify-between items-center z-10    px-5">
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading">
              Book a car by getting in touch with us
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex font-semibold font-text items-center gap-4">
              <FaPhone /> Call To Book
            </div>
            <p className="text-4xl text-primary font-bold font-heading">
              (+88)01403406419
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookACar;
