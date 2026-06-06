import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { User } from "../store/userSlice";
import type { RootState } from "../store/store";
import EditUser from "./EditUser";

function UserList() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state: RootState) => state.users.users);
  const loading = useAppSelector((state: RootState) => state.users.loading);

  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {users.map((user) => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          
    

          <button
            className="btn-delete"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            Delete
          </button>

          <button
            className="btn-edit"
            onClick={() => setEditingUser(user)}
          >
            Edit
          </button>

          {editingUser?.id === user.id && (
            <EditUser
              user={editingUser}
              onClose={() => setEditingUser(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;