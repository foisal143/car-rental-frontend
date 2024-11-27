/* eslint-disable @typescript-eslint/ban-ts-comment */
import Container from '../container/Container';
import HeadingText from '../utils/HeadingText';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      rating: 4.8,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s',
      designation: 'Software Engineer',
      description:
        'The car rental service was seamless and exceeded my expectations. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      rating: 5.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s',
      designation: 'Marketing Manager',
      description:
        'Excellent selection of cars and outstanding customer service. Will definitely return!',
    },
    {
      name: 'Michael Johnson',
      rating: 4.5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s',
      designation: 'Entrepreneur',
      description:
        'Great value for money and an effortless booking process. The staff was very helpful.',
    },
    {
      name: 'Emily Davis',
      rating: 4.9,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrkNdumT-XgDOUdMgaleHw1Zr1F2cB0satw&s',
      designation: 'Graphic Designer',
      description:
        'The car was in excellent condition, and the entire experience was hassle-free. Loved it!',
    },
    {
      name: 'Chris Lee',
      rating: 4.7,
      image:
        'https://www.usatoday.com/gcdn/-mm-/82fab2b6f5cac63b3edae6c7bce2b02ad9269e68/c=0-308-2999-2002/local/-/media/2016/08/19/USATODAY/USATODAY/636072206530820874-XXX-JJC8610.JPG',
      designation: 'Freelance Writer',
      description:
        'The process was quick and easy. The car I rented was clean and comfortable. Highly recommend!',
    },
    {
      name: 'Sophia Martinez',
      rating: 5.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpQN4JhzL-wlZGY9o-6-yPMw5s3tUR7MP2g&s',
      designation: 'HR Specialist',
      description:
        'Amazing experience! The staff was very accommodating, and the car performed perfectly.',
    },
  ];

  return (
    <Container>
      <HeadingText text="Our Happy Clients" />
      <div className="mb-24 mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map(item => (
            <SwiperSlide key={item.image}>
              <div className="border h-[300px] text-center space-y-3 p-5">
                <img
                  className="w-20 h-20 rounded-full mx-auto"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-semibold font-heading">
                    {item.name}
                  </h3>
                  <p className="text-text">{item.designation}</p>
                </div>
                <p>{item.description.slice(0, 100)}</p>
                <p>
                  {
                    // @ts-ignore
                    <Rating
                      placeholderRating={item.rating}
                      fullSymbol={<FaStar className="text-primary" />}
                      placeholderSymbol={<FaStar />}
                      emptySymbol={<FaRegStar />}
                      initialRating={item.rating}
                      readonly
                    />
                  }
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonial;
