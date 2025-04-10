import { FaEdit, FaTrash } from 'react-icons/fa';
import { TCar } from '../../../interface/cars';
import { useDeleteCarMutation } from '../../../Redux/features/car/carApis';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const ManageCarsRow = ({ car }: { car: TCar }) => {
  const [deleteCar, { data: deleteInfo }] = useDeleteCarMutation();
  const handlerDeleteCar = (id: string) => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        deleteCar(id);
      }
    });
  };

  useEffect(() => {
    if (deleteInfo?.success) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
      });
    }
  }, [deleteInfo]);
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={car?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{car?.name}</td>
      <td
        className={`${
          car.status === 'available' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {car?.status}
      </td>

      <td className="text-primary">${car?.pricePerHour}</td>
      <td className="flex gap-2 items-center">
        <button className="btn-secondary">
          <FaEdit />{' '}
        </button>
        <button
          onClick={() => handlerDeleteCar(car?._id)}
          className="btn-primary"
        >
          <FaTrash />{' '}
        </button>
      </td>
    </tr>
  );
};

export default ManageCarsRow;
