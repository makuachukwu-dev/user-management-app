import { Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import AddUserPage from "./pages/AddUserPage";

function App() {
  return (
    <div className="container">
      <h1>User Management System</h1>

      <nav>
        <Link to="/users">Users</Link>
        <Link to="/add-user">Add User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </div>
  );
}

export default App;