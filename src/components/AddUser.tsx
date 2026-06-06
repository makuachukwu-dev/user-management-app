import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addUser } from "../store/userSlice";

function AddUser() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addUser({
        name,
        email,
      })
    );

    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
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
          Add
      </button>
      </form>
    </div>
  );
}

export default AddUser;