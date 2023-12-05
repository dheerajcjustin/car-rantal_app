import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken, selectCurrentUserType, logOut } from "./authSlice";

const RequireAuth = () => {
      const dispatch = useDispatch();
      const token = useSelector(selectCurrentToken);
      const userType = useSelector(selectCurrentUserType);
      const location = useLocation();
      if (userType !== "user") {
            dispatch(logOut());
      }

      return token && userType === "user" ? (
            <Outlet />
      ) : (
            <Navigate to="/login" state={{ from: location }} replace />
      );
};
export default RequireAuth;
