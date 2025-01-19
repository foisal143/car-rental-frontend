import { useLoaderData, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';

const CarsDetails = () => {
  const carRes = useLoaderData();
  const car = carRes?.data;
  const navigate = useNavigate();
  const handlerNavigateToCars = () => {
    navigate('/services');
  };
  const handlerNavigateToChecout = () => {
    navigate(`/checkout/${car?._id}`);
  };
  return (
    <Container>
      <div className="lg:flex my-32 justify-between gap-10">
        <div className="lg:w-1/2">
          <img
            className="w-full border h-full rounded-md"
            src={car?.image}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <div className="border-b  pb-3">
            <p className="text-5xl font-bold font-heading">
              ${car?.pricePerHour}
            </p>
            <p className="text-text font-text">rent per hour</p>
          </div>
          <h4 className="text-4xl font-semibold font-heading">{car?.name}</h4>
          <p className="text-text font-text">{car?.description}</p>
          <div>
            <h4>
              <strong>Features:</strong>
            </h4>
            <ul className="list-disc ms-5 text-text font-text">
              {car?.features.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <p className=" font-text">
            <strong>Status:</strong>
            <span className="text-text"> {car?.status}</span>
          </p>

          <div className="flex  justify-center lg:justify-start items-center gap-3">
            <button onClick={handlerNavigateToChecout} className="btn-primary">
              Book Now
            </button>
            <button onClick={handlerNavigateToCars} className="btn-secondary">
              Get More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarsDetails;
