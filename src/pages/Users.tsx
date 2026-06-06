import UserList from "../components/UserList";
import AddUser from "../components/AddUser";

function Users() {
  return (
    <div>
      <h1>User Management</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default Users;