import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import UserLanding from "./pages/user/UserLanding";
import SearchPage from "./pages/user/SearchPage";
import Checkout from "./pages/user/Checkout";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import RequireAuth from "./helpers/auth/ReqireAuth";
import NoAuth from "./helpers/auth/NoAuth";
import ForgotPassword from "./pages/user/ForgotPassword/ForgotPassword";

import ForgotPasswordOtp from "./pages/user/ForgotPassword/ForgotPasswordOtp";
import ChangePassword from "./pages/user/ForgotPassword/ChangePassword";
import AdminLanding from "./pages/admin/AdminLandingPage";
import LocationManagement from "./pages/admin/LocationManagement";
import LandingPage from "./pages/vendor/LandingPage";
import LoginVendor from "./pages/vendor/LoginVendor";
import VendorAuth from "./helpers/auth/VendorAuth";
import Bookings from "./pages/vendor/Bookings";
import VerifyCars from "./pages/admin/VerifyCars";
import VendorForgotPassword from "./pages/vendor/forgotPassword/VendorForgotPassword";
import VendorChangePassword from "./pages/vendor/forgotPassword/VendorChangePassword";
import VendorForgotPasswordOtp from "./pages/vendor/forgotPassword/VendorForgotPasswordOtp";
import MyCars from "./pages/vendor/MyCars";
import MyBookings from "./pages/user/Mybookings";
import VendorManagementPage from "./pages/admin/VendorManagementPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserLanding />} />
        <Route element={<NoAuth />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/ForgotPasswordOtp/:mobile"
            element={<ForgotPasswordOtp />}
          />
          <Route
            path="ChangePassword/:userId/:token"
            element={<ChangePassword />}
          />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="search" element={<SearchPage />} />
          <Route path="checkout/:car" element={<Checkout />} />
          <Route path="bookings" element={<MyBookings />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminLanding />} />
        <Route path="location" element={<LocationManagement />} />
        <Route path="cars" element={<VerifyCars />} />
        <Route path="vendors" element={<VendorManagementPage />} />

      </Route>
      <Route path="/vendor" element={<Layout />}>
        <Route path="login" element={<LoginVendor />} />

        <Route path="forgotPassword" element={<VendorForgotPassword />} />
        <Route
          path="ChangePassword/:userId/:token"
          element={<VendorChangePassword />}
        />
        <Route
          path="forgotPasswordOtp/:mobile"
          element={<VendorForgotPasswordOtp />}
        />

        <Route element={<VendorAuth />}>
          <Route index element={<LandingPage />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="myCars" element={<MyCars />} />
        </Route>
      </Route>
    </Routes>
  );
}
