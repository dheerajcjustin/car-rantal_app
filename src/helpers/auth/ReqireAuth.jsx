import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUserType } from "./authSlice";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const userType = useSelector(selectCurrentUserType);
  const location = useLocation();

  return token && userType === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
