/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import { useLoginMutation } from '../../Redux/features/auth/authApis';
import { useAppDispatch } from '../../Redux/hooks/hooks';
import toast from 'react-hot-toast';
import { addUser } from '../../Redux/features/auth/authSlice';
type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { data: loginRes, error: loginError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };
  console.log(loginRes);
  useEffect(() => {
    if (loginRes?.success) {
      toast.success(loginRes?.message);
      const token = loginRes?.data.token;
      const user = loginRes?.data.user;
      dispatch(addUser({ token, user }));
      navigate('/');
    }
    if (loginError) {
      // @ts-ignore
      toast.error(loginError?.data?.message);
    }
  }, [loginRes, dispatch, loginError, navigate]);
  return (
    <Container>
      <form
        className=" my-24 lg:w-1/2 mx-auto bg-white p-6 rounded shadow space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Please Login</h2>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password with Toggle Icon */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>

        {/* Redirect to Registration */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-bold">
            Register here
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
