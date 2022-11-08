import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarForum from "./components/navbarForum/NavbarForum";
import NavbarMain from "./components/navbarMain/NavbarMain";
import HomeForum from "./pages/forum/home/HomeForum";
import Login from "./pages/forum/login/Login";
import Register from "./pages/forum/register/Register";
import Thread from "./pages/forum/thread/Thread";
import Home from "./pages/main/home/Home";
import News_Page from "./pages/main/news_page/News_Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarMain />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News_Page />} />
          </Route>
          <Route path="/forum" element={<NavbarForum />}>
            <Route index element={<HomeForum />}></Route>
            <Route path="/forum/register" element={<Register />} />
            <Route path="/forum/login" element={<Login />} />
            <Route path="/forum/thread/:thread_id" element={<Thread />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
