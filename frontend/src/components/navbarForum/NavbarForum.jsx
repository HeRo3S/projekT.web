import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";
import "./navbarForum.css";

function NavbarForum() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/forum");
      });
  };

  return (
    <>
      <div id="forum-header" className="header">
        <ul id="forum-nav" className="nav">
          <li>
            <Link to="/" id="studioLogoContainer">
              <img
                src={require("../../images/logo_test.png")}
                alt=""
                id="studioLogo"
              ></img>
            </Link>
          </li>
          <li className="search-form">
            <input type="text" placeholder="Search..."></input>
            <button>
              <SearchIcon style={{ fontSize: 30 }} />
            </button>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/forum/create-news">Create News</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/forum/write">Write</Link>
              </li>
              <li onClick={handleLogout}>
                <Link>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/forum/login">Login</Link>
              </li>
              <li>
                <Link to="/forum/register">Regiseter</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarForum;
