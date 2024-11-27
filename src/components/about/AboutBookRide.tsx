import { Link } from 'react-router-dom';
import Container from '../container/Container';

const AboutBookRide = () => {
  return (
    <section
      className="relative my-24 bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-xdrive-50e-796-659d5427d6862.jpg?crop=0.689xw:0.516xh;0.0721xw,0.420xh&resize=640:*')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      <Container>
        <div className="relative flex justify-between items-center z-10    px-5">
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading">
              Save big with our cheap car rental!
            </h2>
            <p className="text-xl font-text">
              Top Airports. Local Suppliers. 24/7 Support.
            </p>
          </div>
          <div>
            <Link to={'/services'}>
              <button className="btn-primary">Book A Ride</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBookRide;
