import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import UserLanding from "./pages/UserLanding";
import SearchPage from "./pages/SearchPage";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RequireAuth from "./helpers/auth/ReqireAuth";
import NoAuth from "./helpers/auth/NoAuth";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ForgotPasswordOtp from "./pages/ForgotPassword/ForgotPasswordOtp";

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
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="search" element={<SearchPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
}
