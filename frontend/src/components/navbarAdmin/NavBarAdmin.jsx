import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import ReplyIcon from "@mui/icons-material/Reply";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";
import { setMessage } from "../../redux/features/messageSlice";
import { SEVERITY } from "../../utils/enum";
import AlertPopup from "../forum/alert/AlertPopup";
import "./navbaradmin.css";

function NavBarAdmin() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        dispatch(
          setMessage({ message: "Goodbye!", severity: SEVERITY.SUCCESS })
        );
        navigate("/forum");
      });
  };

  return (
    <>
      <div id="nav-bar-admin">
        <span>Admin Page</span>
        <div id="user-nav">
          <span>Forum</span>
          <Link to="/admin/all_users" className="user-nav-block">
            <PersonIcon className="icon" />
            <span>Member</span>
          </Link>
          <Link to="/admin/all_admins" className="user-nav-block">
            <AdminPanelSettingsIcon className="icon" />
            <span>Admin</span>
          </Link>
          <Link to="/forum" className="user-nav-block">
            <ReplyIcon className="icon" />
            <span>Back to forum</span>
          </Link>
        </div>

        <div id="admin-profile">
          <span>Profile</span>
          <div id="profile-content">
            <img src={require("../../images/avatar-admin.jpg")} alt="" />
            <div id="admin-name">
              <span>{user?.username}</span>
              <span>Forum's Manager</span>
            </div>
          </div>
        </div>

        {user && <button onClick={handleLogout}>LOGOUT</button>}
      </div>

      <AlertPopup />
      <Outlet />
    </>
  );
}

export default NavBarAdmin;
