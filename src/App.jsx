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
import VendorManagement from "./pages/admin/VendorManagement";
import LandingPage from "./pages/vendor/LandingPage";
import LoginVendor from "./pages/vendor/LoginVendor";
import VendorAuth from "./helpers/auth/VendorAuth";

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
            path="ChangePassword/:userId/:token"
            element={<ChangePassword />}
          />

          <Route
            path="/ForgotPasswordOtp/:mobile"
            element={<ForgotPasswordOtp />}
          />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="search" element={<SearchPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminLanding />} />
        <Route path="location" element={<LocationManagement />} />
        <Route path="vendor" element={<VendorManagement />} />
      </Route>
      <Route path="/vendor" element={<Layout />}>
        <Route path="login" element={<LoginVendor />} />
        <Route element={<VendorAuth />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
