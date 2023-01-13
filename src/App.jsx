import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import UserLanding from "./pages/UserLanding";
import SearchPage from "./pages/SearchPage";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserLanding />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/* <Route path="signin" element={<SignIn />} /> */}
        {/* <Route path="Signup" element={<SignUp />} /> */}
        {/* <Route element={<RequireAuth />}>
          <Route path="jobs" element={<Jobs />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route> */}
      </Route>
    </Routes>
  );
}
