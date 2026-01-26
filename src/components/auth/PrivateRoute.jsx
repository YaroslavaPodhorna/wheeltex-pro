import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const isAuthenticated = useSelector(
    (state) => state.adminAuth.isAuthenticated
  );

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}
