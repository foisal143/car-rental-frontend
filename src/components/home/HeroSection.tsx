import Container from '../container/Container';

const HeroSection = () => {
  return (
    <div className="bg-red-50 relative">
      <Container>
        <div className=" px-5 lg:flex justify-center py-24  lg:py-0 gap-10 items-center lg:h-[650px]">
          <div className="lg:w-1/2 text-center md:text-start space-y-6">
            <h4 className=" md:text-xl font-semibold">Plan your trip now</h4>
            <h2 className=" text-3xl md:text-6xl font-bold font-heading">
              Save big with our <br /> car rental
            </h2>
            <p className="font-text ">
              To contribute to positive change and achieve our sustainability
              goals with <br /> many extraordinary
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-3">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="lg:w-1/2  ">
            <img
              className="w-full lg:scale-125"
              src="https://purepng.com/public/uploads/large/red-car-ezq.png"
              alt=""
            />
          </div>
        </div>
      </Container>

      <div className="absolute  -bottom-6 w-full flex justify-center items-center">
        <div className="join w-10/12 lg:w-1/2">
          <input
            className="input w-full input-bordered text-text font-text join-item"
            placeholder="Search car for trip"
          />
          <button className="btn-primary join-item ">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
