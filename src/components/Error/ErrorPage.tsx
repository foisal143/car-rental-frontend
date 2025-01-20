import { PiSmileySad } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center min-h-screen flex justify-center items-center font-text  ">
      <div className="text-center">
        <h6 className="w-fit  mx-auto text-7xl text-primary">
          <PiSmileySad />
        </h6>
        <p className="text-5xl mb-2">An error occured</p>
        <Link to="/">
          <button className="btn-primary">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
