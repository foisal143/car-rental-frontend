import { useNavigate } from 'react-router-dom';
import { TCar } from '../../interface/cars';

const CarsCard = ({ car }: { car: TCar }) => {
  const { name, pricePerHour, image, description, _id } = car;
  const navigate = useNavigate();

  // Navigate to car details when the card is clicked
  const handleCardClick = () => {
    navigate(`/services/cars/${_id}`);
  };

  // Navigate to checkout when the "Book Now" button is clicked
  const handleBookNowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event from triggering
    navigate(`/checkout/${_id}`);
  };
  return (
    <div
      onClick={handleCardClick}
      className="card cursor-pointer group card-compact bg-base-100 rounded shadow"
    >
      {' '}
      <figure className="h-1/2 overflow-hidden">
        <img
          className="group-hover:scale-125 transition-all duration-200"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-heading">{name}</h2>
        <p className="font-text">{description}</p>
        <p className="text-primary text-2xl font-text">${pricePerHour}/h</p>
        <div className="card-actions ">
          <button onClick={handleBookNowClick} className=" btn-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
