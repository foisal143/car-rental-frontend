import { TUser } from '../../../pages/Register/Register';

const ManageUserRow = ({ user }: { user: TUser }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>

      <td>{user?.role}</td>
      <td>{user?.phone}</td>
      <td>
        <button>details</button>
      </td>
    </tr>
  );
};

export default ManageUserRow;
