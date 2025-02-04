import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminPage = () => {
  const { role } = useAuth();

  if (role != "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminPage;