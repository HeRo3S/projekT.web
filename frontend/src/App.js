import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarAdmin from "./components/navbarAdmin/NavBarAdmin";
import NavbarForum from "./components/navbarForum/NavbarForum";
import NavbarMain from "./components/navbarMain/NavbarMain";
import Default from "./pages/blank/Default";
import Admin from "./pages/forum/admin/Admin";
import DisplayAdmin from "./pages/forum/admin/display admin/DisplayAdmin";
import DisplayUser from "./pages/forum/admin/display user/DisplayUser";
import CreateNews from "./pages/forum/create news/CreateNews";
import HomeForum from "./pages/forum/home/HomeForum";
import Login from "./pages/forum/login/Login";
import PostThread from "./pages/forum/post thread/PostThread";
import Register from "./pages/forum/register/Register";
import Thread from "./pages/forum/thread/Thread";
import User from "./pages/forum/user/User";
import Home from "./pages/main/home/Home";
import DetailsNew from "./pages/main/news_page/DetailsNew";
import NewsPage from "./pages/main/news_page/NewsPage";
import { PERMISSION_LEVEL } from "./utils/enum";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarMain />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:news_id" element={<DetailsNew />} />
          </Route>
          <Route path="/forum" element={<NavbarForum />}>
            <Route index element={<HomeForum />}></Route>
            <Route path="/forum/register" element={<Register />} />
            <Route path="/forum/login" element={<Login />} />
            <Route path="/forum/thread/:thread_id" element={<Thread />} />
            <Route path="/forum/user/:user_id" element={<User />} />
            {user && (
              <>
                <Route path="/forum/post-thread" element={<PostThread />} />
                <Route path="/forum/create-news" element={<CreateNews />} />
              </>
            )}
          </Route>
          {user?.userInfo?.permissionLevel === PERMISSION_LEVEL.SUPER_ADMIN && (
            <Route path="/admin" element={<NavBarAdmin />}>
              <Route index element={<Admin />}></Route>
              <Route path="/admin/all_users" element={<DisplayUser />} />
              <Route path="/admin/all_admins" element={<DisplayAdmin />} />
            </Route>
          )}
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
