import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateCarMutation } from '../../../../Redux/features/car/carApis';
import Loading from '../../../../utils/Loading';
import { useNavigate } from 'react-router-dom';

type CarFormData = {
  name: string;
  image: string;
  description: string;
  color: string;
  isElectric: boolean;
  status?: 'available' | 'unavailable';
  features: string[];
  pricePerHour: string;
  isDeleted?: boolean;
};
const AddCar = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CarFormData>();
  const [uploading, setUploading] = useState(false);
  const [isElectric, setIsElectric] = useState(true);
  const [loading, setLoading] = useState(false);
  const [createCar, { data: carRes }] = useCreateCarMutation();
  const navigate = useNavigate();
  //  add car eventhandler
  const onSubmit: SubmitHandler<CarFormData> = async data => {
    const price = parseFloat(data.pricePerHour);
    setLoading(true);
    const carsInfo = {
      ...data,
      isDeleted: false,
      pricePerHour: price,
      isElectric,
    };
    console.log(carsInfo);
    createCar(carsInfo);
    setLoading(false);
    reset();
  };

  // image upload to imgbb
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=2c0d4b053df8382e3fea05ec0c310e31`, // Replace with your Imgbb API key
        formData
      );
      const imageUrl = response.data.data.url;
      setValue('image', imageUrl); // Set the image URL in the form
      setLoading(false);
    } catch (error) {
      console.error('Image upload failed:', error);
      setLoading(false);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (carRes) {
      navigate('/dashboard/manage-cars');
    }
  }, [carRes, navigate]);
  return (
    <div className="p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl  mx-auto space-y-6 p-4 font-text rounded-md "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-medium">
              Car Name
            </label>
            <input
              placeholder="Enter your name"
              id="name"
              {...register('name', { required: 'Car name is required' })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block font-medium">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {uploading && <p className="text-blue-500 text-sm">Uploading...</p>}
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              placeholder="Enter car description"
              id="description"
              {...register('description', {
                required: 'Description is required',
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Color Field */}
          <div>
            <label htmlFor="color" className="block font-medium">
              Color
            </label>
            <input
              placeholder="Enter car color"
              id="color"
              {...register('color', { required: 'Color is required' })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.color && (
              <p className="text-red-500 text-sm">{errors.color.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Is Electric Field with Stylish Radio Buttons */}
          <div>
            <label className="block font-medium">Electric</label>
            <div className="flex space-x-4 mt-2">
              {/* Yes Option */}
              <label
                onClick={() => setIsElectric(true)}
                className="flex items-center cursor-pointer space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:bg-blue-50 transition"
              >
                <input
                  type="radio"
                  value={`true`} // Set the value for "Yes"
                  {...register('isElectric', {
                    required: 'Please select if the car is electric',
                  })}
                  className="hidden"
                />
                <div className="w-4 h-4 border-2 border-[#ff4c31] rounded-full flex items-center justify-center">
                  {isElectric && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
                <span>Yes</span>
              </label>

              {/* No Option */}
              <label
                onClick={() => setIsElectric(false)}
                className="flex items-center cursor-pointer space-x-2 px-3 py-2 rounded-md border border-gray-300 hover:bg-blue-50 transition"
              >
                <input
                  type="radio"
                  value={`${!isElectric}`} // Set the value for "No"
                  {...register('isElectric', {
                    required: 'Please select if the car is electric',
                  })}
                  className="hidden"
                />
                <div className="w-4 h-4 border-2 border-[#ff4c31] rounded-full flex items-center justify-center">
                  {isElectric === false && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
                <span>No</span>
              </label>
            </div>
            {errors.isElectric && (
              <p className="text-red-500 text-sm">
                {errors.isElectric.message}
              </p>
            )}
          </div>

          {/* Status Field */}
          <div>
            <label htmlFor="status" className="block font-medium">
              Status
            </label>
            <select
              id="status"
              {...register('status')}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>

        <div>
          {/* Features Field */}
          <label htmlFor="features" className="block font-medium">
            Features (comma-separated)
          </label>
          <input
            placeholder="Enter car features "
            id="features"
            {...register('features', {
              setValueAs: value =>
                value.split(',').map((feature: string) => feature.trim()),
            })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          {/* Price Per Hour Field */}
          <label htmlFor="pricePerHour" className="block font-medium">
            Price Per Hour ($)
          </label>
          <input
            id="pricePerHour"
            placeholder="Enter car price"
            type="number"
            {...register('pricePerHour', {
              required: 'Price per hour is required',
              min: 1,
            })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.pricePerHour && (
            <p className="text-red-500 text-sm">
              {errors.pricePerHour.message}
            </p>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="btn-primary w-full py-2 rounded text-white"
        >
          {loading ? <Loading loadingName="white" /> : ' Add Car'}
        </button>
      </form>
    </div>
  );
};

export default AddCar;
