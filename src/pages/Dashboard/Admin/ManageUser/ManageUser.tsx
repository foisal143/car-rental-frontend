import ManageUserRow from '../../../../components/dashboard/admin/ManageUserRow';
import HeadingText from '../../../../components/utils/HeadingText';
import { useGetAllUserQuery } from '../../../../Redux/features/user/userApis';
import { TUser } from '../../../Register/Register';

const ManageUser = () => {
  const { data: userRes } = useGetAllUserQuery(undefined);
  const users = userRes?.data;

  return (
    <div className="p-5">
      <HeadingText text="Manage Users" />
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>

              <th>Role</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users.length > 0 &&
              users.map((user: TUser) => (
                <ManageUserRow key={user._id} user={user} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
