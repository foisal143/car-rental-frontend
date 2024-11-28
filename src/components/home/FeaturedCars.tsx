import { TCar } from '../../interface/cars';
import { useGetCarsQuery } from '../../Redux/features/car/carApis';
import Container from '../container/Container';
import NotFound from '../NotFound';
import HeadingText from '../utils/HeadingText';
import CarsCard from './CarsCard';

const FeaturedCars = () => {
  const {
    data: carRes,
    isFetching,
    isLoading,
  } = useGetCarsQuery({ searchTerm: '' });
  const carsData = carRes?.data;
  if (isLoading || isFetching) {
    return (
      <div className="my-24 flex justify-center items-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <Container>
      <div className="my-24">
        <HeadingText text="Our Featured Cars" />
        {carsData && carsData.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {carsData &&
              carsData.slice(0, 6).map((car: TCar) => <CarsCard car={car} />)}
          </div>
        ) : (
          <NotFound text="Cars Not Found!" />
        )}
      </div>
    </Container>
  );
};

export default FeaturedCars;
