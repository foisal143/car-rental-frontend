import Container from '../container/Container';
import HeadingText from '../utils/HeadingText';

const OurTem = () => {
  return (
    <Container>
      <HeadingText text="Our Team" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="text-center bg-red-50 p-5  rounded-md ">
          <img
            className="w-24 border h-24 mx-auto rounded-full"
            src="https://i.ibb.co.com/4pMzj14/heading-image.png"
            alt=""
          />
          <h4 className="text-xl font-heading font-bold">Md Foisal Islam</h4>
          <p className="text-xs font-text">Full Stack Developer</p>
        </div>
        <div className="text-center bg-red-50 p-5  rounded-md ">
          <img
            className="w-24 border h-24 mx-auto rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
            alt=""
          />
          <h4 className="text-xl font-heading font-bold">Md Anisul Islam</h4>
          <p className="text-xs font-text">Full Stack Developer</p>
        </div>
        <div className="text-center bg-red-50 p-5  rounded-md ">
          <img
            className="w-24 border h-24 mx-auto rounded-full"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt=""
          />
          <h4 className="text-xl font-heading font-bold">
            Shuhanur Rahoman Sumon
          </h4>
          <p className="text-xs font-text">Full Stack Developer</p>
        </div>
        <div className="text-center bg-red-50 p-5  rounded-md ">
          <img
            className="w-24 border h-24 mx-auto rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <h4 className="text-xl font-heading font-bold">Md Kobir Islam</h4>
          <p className="text-xs font-text">Full Stack Developer</p>
        </div>
      </div>
    </Container>
  );
};

export default OurTem;
