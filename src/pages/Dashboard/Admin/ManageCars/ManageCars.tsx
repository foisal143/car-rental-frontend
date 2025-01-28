import ManageCarsRow from '../../../../components/dashboard/admin/ManageCarsRow';
import HeadingText from '../../../../components/utils/HeadingText';
import { TCar } from '../../../../interface/cars';
import { useGetCarsQuery } from '../../../../Redux/features/car/carApis';

const ManageCars = () => {
  const { data: carRes } = useGetCarsQuery({});
  const cars = carRes?.data;
  console.log(cars);
  return (
    <div className="p-5">
      <HeadingText text="Manage Users" />
      <div className="overflow-x-auto mt-5 font-text">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price/Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cars &&
              cars.length > 0 &&
              cars.map((car: TCar) => (
                <ManageCarsRow key={car._id} car={car} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
