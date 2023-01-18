import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserType } from "./authSlice";

const VendorAuth = () => {
  const userType = useSelector(selectCurrentUserType);
  const location = useLocation();

  return userType == "vendor" ? (
    <Outlet />
  ) : (
    <Navigate to="/vendor/login" state={{ from: location }} replace />
  );
};
export default VendorAuth;
