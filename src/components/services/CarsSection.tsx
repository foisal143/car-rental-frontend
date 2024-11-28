/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormEvent, useEffect, useState } from 'react';
import { TCar } from '../../interface/cars';
import { useGetCarsQuery } from '../../Redux/features/car/carApis';
import Container from '../container/Container';
import CarsCard from '../home/CarsCard';
import HeadingText from '../utils/HeadingText';

const CarsSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: carRes } = useGetCarsQuery({ searchTerm: searchValue });
  const carsData = carRes?.data;
  const [cars, setCars] = useState([]);
  const handlerSearch = (e: FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const search = e.target.search.value;
    setSearchValue(search);
    console.log(carsData);
  };

  useEffect(() => {
    setCars(carsData);
  }, [carsData, searchValue]);

  return (
    <Container>
      <div className=" mt-32 gap-10">
        <div className="flex justify-between items-center">
          <HeadingText text="Our Cars" />
          <form onSubmit={handlerSearch} className="join w-10/12 lg:w-1/2">
            <input
              className="input w-full input-bordered text-text font-text join-item"
              placeholder="Search car for trip"
              name="search"
            />
            <button type="submit" className="btn-primary join-item ">
              Search
            </button>
          </form>
        </div>
        {cars && cars.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cars && cars.map((car: TCar) => <CarsCard car={car} />)}
          </div>
        ) : (
          <p>No Car Found</p>
        )}
        <div></div>
      </div>
    </Container>
  );
};

export default CarsSection;
