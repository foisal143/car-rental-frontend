import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '../../../../Redux/hooks/hooks';
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from '../../../../Redux/features/user/userApis';
import ProfileInfo from '../../../../components/dashboard/user/ProfileInfo';

type Role = 'admin' | 'user' | 'moderator'; // Define possible roles

type FormData = {
  name: string;
  email: string;
  role: Role;
  phone: string;
  address: string;
  image: string;
};
const EditProfile = () => {
  const { email } = useAppSelector(state => state.driveSecuireAuth.user);
  const userRes = useGetSingleUserQuery(email);
  const user = userRes?.data?.data;
  const [updateUser, { data: userUpRes }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      role: user?.role,
      phone: user?.phone,
      address: user?.address,
      image: user?.image,
    },
  });

  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
          {
            method: 'POST',
            body: formData,
          }
        );
        const result = await response.json();
        setValue('image', result.data.url);
      } catch (error) {
        console.error('Image upload failed', error);
      } finally {
        setLoading(false);
      }
    }
  };
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    updateUser({ email: user.email, userInfo: { ...data } });
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
        image: user.image,
      });
    }
  }, [user, reset]); // Reset the form whenever `user` changes

  return (
    <div className="min-h-screen mt-8 lg:mt-0 flex flex-col-reverse lg:flex-row   items-center">
      {' '}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 lg:w-1/2 mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone is required',
                pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' },
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            readOnly
            className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="role" className="block font-medium">
            Role
          </label>
          <input
            id="role"
            {...register('role')}
            readOnly
            className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium">
            Address
          </label>
          <textarea
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="image" className="block font-medium">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {loading && <p className="text-blue-500 text-sm">Uploading...</p>}
        </div>

        <button
          type="submit"
          className="btn-primary w-full px-4 py-2 rounded text-white"
        >
          Submit
        </button>
      </form>
      <div className="lg:w-1/3 ">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default EditProfile;
