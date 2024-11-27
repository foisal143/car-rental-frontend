/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import toast from 'react-hot-toast';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useCreateUserMutation } from '../../Redux/features/auth/authApis';

export interface TUser {
  name: string;
  email: string;
  role?: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
  image: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<TUser>();
  const [showPassword, setShowPassword] = useState(false);
  const [createUser, { data: userRes, error: userError }] =
    useCreateUserMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handler form submit
  const onSubmit = async (data: TUser) => {
    const userInfo = {
      ...data,
      role: 'user',
    };
    createUser(userInfo);
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=08dea360d9faac6a8de4cf6f88727008`, // Replace with your Imgbb API key
        formData
      );
      const imageUrl = response.data.data.display_url;
      setValue('image', imageUrl, { shouldValidate: true });
      toast.success('Image uploaded successfully!');
      setLoading(false);
    } catch (error) {
      console.error('Error uploading image', error);
      toast.error('Failed to upload image. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userRes?.success) {
      toast.success(userRes?.message);
      reset();
      navigate('/login');
    }
    if (userError) {
      // @ts-ignore
      toast.error(userError?.data?.message);
    }
  }, [userRes, userError, navigate, reset]);

  return (
    <Container>
      <form
        className="lg:w-1/2 mx-auto my-24 bg-white p-6 rounded shadow space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Please Register</h2>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

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

        {/* Password */}
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

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="input input-bordered w-full"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-1">Address</label>
          <textarea
            placeholder="Enter your address"
            className="textarea textarea-bordered w-full"
            {...register('address', { required: 'Address is required' })}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Profile Image</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-full"
        >
          Register
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-bold">
            Login here
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;
