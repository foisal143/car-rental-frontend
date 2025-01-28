import { FaEdit, FaTrash } from 'react-icons/fa';
import { TCar } from '../../../interface/cars';

const ManageCarsRow = ({ car }: { car: TCar }) => {
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
        <button className="btn-primary">
          <FaTrash />{' '}
        </button>
      </td>
    </tr>
  );
};

export default ManageCarsRow;
