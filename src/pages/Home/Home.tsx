import AboutSection from '../../components/home/AboutSection';
import FAQSection from '../../components/home/FAQSection';
import FeaturedCars from '../../components/home/FeaturedCars';
import HeroSection from '../../components/home/HeroSection';
import NewsLetterSection from '../../components/home/NewsLetterSection';
import Testimonial from '../../components/home/Testimonial';
import WhyChoseUs from '../../components/home/WhyChoseUs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChoseUs />
      <AboutSection />
      <FeaturedCars />
      <Testimonial />
      <FAQSection />
      <NewsLetterSection />
    </>
  );
};

export default Home;
