/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLoaderData, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import { useForm } from 'react-hook-form';
import calculateTotalCost from '../../utils/calculateTotalCost';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../Redux/hooks/hooks';
import { useCreateBookingsMutation } from '../../Redux/features/bookings/bookingsapis';
import toast from 'react-hot-toast';

type BookingFormData = {
  carName: string;
  startTime: string;
  endTime: string;
  date: string;
  nidPassport: string;
  drivingLicense: string;
  paymentInfo: string;
  gps?: boolean;
  childSeat?: boolean;
};

const CheckoutPage = () => {
  const carData = useLoaderData(); // Assuming cars data is passed via loader
  const car = carData?.data;
  const navigate = useNavigate();
  const user = useAppSelector(state => state.driveSecuireAuth.user);
  const [createBooking, { data: bookingRes, error, isLoading }] =
    useCreateBookingsMutation();
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const totalCost = calculateTotalCost({
      startTime: data.startTime,
      endTime: data.endTime,
      pricePerHour: car?.pricePerHour,
    });
    if (totalCost !== null) {
      setTotalPrice(totalCost);
      const bookingInfo = {
        car: car,
        user: user,
        totalCost,
        startTime: data.startTime,
        endTime: data.endTime,
        payStatus: 'pending',
        status: 'pending',
        date: data.date,
        passport: data.nidPassport,
        driving: data.drivingLicense,
      };
      createBooking(bookingInfo);
    }
  };

  useEffect(() => {
    if (bookingRes?.success) {
      window.open(`${bookingRes?.data?.payment_url}`, '_blank');
      navigate('/dashboard/my-bookings');
    }
    if (error) {
      // @ts-ignore
      toast.error(error?.data?.message as string);
      console.log(error);
    }
  }, [bookingRes, navigate, error]);
  return (
    <Container>
      <div className="my-32   gap-10">
        <div className="lg:w-1/2 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-md mx-auto"
          >
            {/* Personal Details Section */}
            <div>
              <label
                htmlFor="nidPassport"
                className="block text-sm font-medium"
              >
                NID/Passport Number
              </label>
              <input
                id="nidPassport"
                {...register('nidPassport', {
                  required: 'NID/Passport Number is required',
                })}
                type="text"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
                placeholder="Enter your NID/Passport number"
              />
              {errors.nidPassport && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nidPassport.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="drivingLicense"
                className="block text-sm font-medium"
              >
                Driving License Number
              </label>
              <input
                id="drivingLicense"
                {...register('drivingLicense', {
                  required: 'Driving License Number is required',
                })}
                type="text"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
                placeholder="Enter your driving license number"
              />
              {errors.drivingLicense && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.drivingLicense.message}
                </p>
              )}
            </div>

            {/* Additional Options Section */}
            <div>
              <label className="block text-sm font-medium">
                Additional Options
              </label>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <input
                    id="gps"
                    type="checkbox"
                    {...register('gps')}
                    className="h-4 w-4 text-primary focus:ring focus:ring-primary"
                  />
                  <label htmlFor="gps" className="ml-2 text-sm">
                    GPS
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="childSeat"
                    type="checkbox"
                    {...register('childSeat')}
                    className="h-4 w-4 text-primary focus:ring focus:ring-primary"
                  />
                  <label htmlFor="childSeat" className="ml-2 text-sm">
                    Child Seat
                  </label>
                </div>
              </div>
            </div>

            {/* Existing Fields */}
            <div>
              <label htmlFor="carName" className="block text-sm font-medium">
                Car Name
              </label>
              <input
                id="carName"
                disabled={true}
                {...register('carName')}
                type="text"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
                placeholder="Enter car name"
                defaultValue={car?.name}
              />
              {errors.carName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.carName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="startTime" className="block text-sm font-medium">
                Start Time
              </label>
              <input
                id="startTime"
                {...register('startTime', {
                  required: 'Start Time is required',
                })}
                type="time"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
              />
              {errors.startTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startTime.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="endTime" className="block text-sm font-medium">
                End Time
              </label>
              <input
                id="endTime"
                {...register('endTime', { required: 'End Time is required' })}
                type="time"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
              />
              {errors.endTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endTime.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium">
                Date
              </label>
              <input
                id="date"
                {...register('date', { required: 'Date is required' })}
                type="date"
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-primary"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Book Button */}
            <button
              disabled={isLoading}
              type="submit"
              className="btn-primary w-full"
            >
              {isLoading ? (
                <span className="loading  loading-spinner text-error"></span>
              ) : (
                `   Book Now ${totalPrice > 0 && totalPrice}`
              )}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
