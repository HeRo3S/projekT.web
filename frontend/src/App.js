import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarForum from "./components/navbar/NavbarForum";
import NavbarMain from "./components/navbar/NavbarMain";
import HomeForum from "./pages/forum/home/HomeForum";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarMain />}>
            <Route path="/" element />
          </Route>
          <Route element={<NavbarForum />}>
            <Route path="/forum" element={<HomeForum />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
