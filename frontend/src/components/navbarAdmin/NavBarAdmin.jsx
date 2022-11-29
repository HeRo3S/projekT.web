import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link, Outlet } from "react-router-dom";
import "./navbaradmin.css";

function NavBarAdmin() {
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
              <span>Rika Furude</span>
              <span>Forum's Manager</span>
            </div>
          </div>
        </div>

        <button>Log out</button>
      </div>

      <Outlet />
    </>
  );
}

export default NavBarAdmin;
