import Container from '../container/Container';

const AboutSection = () => {
  return (
    <Container>
      <div className="my-24 lg:flex justify-between items-center gap-10">
        <div className="lg:w-1/2 overflow-hidden">
          <img
            className=" lg:w-2/3 mx-auto w-full rounded-md"
            src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/about_image.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 space-y-7">
          <h3 className="text-xl font-semibold font-heading">About Company</h3>
          <h2 className="text-2xl lg:text-5xl font-bold font-heading">
            You start the engine and your adventure begins
          </h2>
          <p className="text-text">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="flex  justify-center lg:justify-start items-center gap-3">
            <button className="btn-primary">Book A Ride</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
