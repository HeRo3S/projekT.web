import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarForum from "./components/navbarForum/NavbarForum";
import NavbarMain from "./components/navbarMain/NavbarMain";
import HomeForum from "./pages/forum/home/HomeForum";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarMain />}>
            <Route index element />
          </Route>
          <Route path="/forum" element={<NavbarForum />}>
            <Route index element={<HomeForum />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
