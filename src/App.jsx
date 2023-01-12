import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import UserLanding from "./pages/UserLanding";
import SearchPage from "./pages/SearchPage";
SearchPage;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserLanding />} />
        <Route path="search" element={<SearchPage />} />

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
