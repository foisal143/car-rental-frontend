import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Loading from '../../utils/Loading';

export type TCar = {
  name: string;
  image: string;
  description: string;
  color: string;
  isElectric: boolean;
  status?: 'available' | 'unavailable';
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};
const CarsDetailsModal = ({ carsInfo }: { carsInfo: TCar }) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<TCar>();

  const [loading, setLoading] = useState(false);

  //  add car eventhandler
  const onSubmit: SubmitHandler<TCar> = async data => {
    console.log(data);
    reset();
  };

  // // image upload to imgbb
  // const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoading(true);
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   setUploading(true);
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const response = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=2c0d4b053df8382e3fea05ec0c310e31`, // Replace with your Imgbb API key
  //       formData
  //     );
  //     const imageUrl = response.data.data.url;
  //     setValue('image', imageUrl); // Set the image URL in the form
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Image upload failed:', error);
  //     setLoading(false);
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <div className="w-full  mx-auto">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box lg:w-1/2 mx-auto">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* car info form */}
          <div className="p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" w-full mx-auto space-y-6 p-4 font-text rounded-md "
            >
              <div className="grid grid-cols-1  gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-medium">
                    Car Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    id="name"
                    defaultValue={carsInfo?.name}
                    {...register('name', { required: 'Car name is required' })}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Image Upload */}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block font-medium">
                    Description
                  </label>
                  <textarea
                    defaultValue={carsInfo?.description}
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
                    defaultValue={carsInfo?.color}
                    placeholder="Enter car color"
                    id="color"
                    {...register('color', { required: 'Color is required' })}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                  {errors.color && (
                    <p className="text-red-500 text-sm">
                      {errors.color.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1  gap-4">
                {/* Is Electric Field with Stylish Radio Buttons */}

                {/* Status Field */}
                <div>
                  <label htmlFor="status" className="block font-medium">
                    Status
                  </label>
                  <select
                    id="status"
                    defaultValue={carsInfo?.status}
                    {...register('status')}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  >
                    <option
                      value={
                        carsInfo.status === 'available'
                          ? 'available'
                          : 'unavailable'
                      }
                    >
                      {carsInfo.status === 'available'
                        ? 'Available'
                        : 'Unavailable'}
                    </option>
                    <option
                      value={
                        carsInfo.status !== 'available'
                          ? 'available'
                          : 'unavailable'
                      }
                    >
                      {carsInfo.status !== 'available'
                        ? 'Available'
                        : 'Unvailable'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                {/* Features Field */}
                <label htmlFor="features" className="block font-medium">
                  Features (comma-separated)
                </label>
                <input
                  defaultValue={carsInfo?.features}
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
                  defaultValue={carsInfo?.pricePerHour}
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
                {loading ? <Loading loadingName="white" /> : ' Update Car'}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CarsDetailsModal;
