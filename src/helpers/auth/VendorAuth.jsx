import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
      selectCurrentUserType,
      selectCurrentUser,
      selectCurrentToken,
} from "./vendorAuthSlice";

const VendorAuth = () => {
      const token = useSelector(selectCurrentToken);
      const userType = useSelector(selectCurrentUserType);
      const location = useLocation();

      return token && userType === "vendor" ? (
            <Outlet />
      ) : (
            <Navigate to="/vendor/login" state={{ from: location }} replace />
      );
};
export default VendorAuth;
