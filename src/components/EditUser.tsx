import { useState, FormEvent } from "react";
import { useAppDispatch } from "../store/hooks";
import { updateUser } from "../store/userSlice";
import type { User } from "../store/userSlice";

type EditUserProps = {
  user: User;
  onClose: () => void;
};

function EditUser({ user, onClose }: EditUserProps) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: user.id,
        name,
        email,
      })
    );

    onClose();
  };

  return (
    <div className="card">
      <h3>Edit User</h3>

      <form onSubmit={handleUpdate}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="btn-add">
          Update
        </button>

        <button type="button" className="btn-delete" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditUser;