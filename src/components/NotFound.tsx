import { PiSmileySad } from 'react-icons/pi';

const NotFound = ({ text }: { text: string }) => {
  return (
    <div className="text-center flex justify-center items-center font-text my-24 text-3xl">
      <div className="text-center">
        <h6 className="w-fit mx-auto text-5xl text-primary">
          <PiSmileySad />
        </h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NotFound;
