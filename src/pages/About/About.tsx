import AboutBookRide from '../../components/about/AboutBookRide';
import BookACar from '../../components/about/BookACar';
import HowItWorks from '../../components/about/HowItWorks';
import OurTem from '../../components/about/OurTem';
import AboutSection from '../../components/home/AboutSection';
import Testimonial from '../../components/home/Testimonial';

const About = () => {
  return (
    <>
      <div className="my-24 mt-32">
        <AboutSection />
        <HowItWorks />
        <AboutBookRide />
        <Testimonial />
        <BookACar />
        <OurTem />
      </div>
    </>
  );
};

export default About;
