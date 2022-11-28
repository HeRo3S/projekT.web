import "./admin.css";
import NavBarAdmin from "../../../components/navbarAdmin/NavBarAdmin";

function Admin() {
  return (
    <div id="admin" className="main">
      <NavBarAdmin />
      <div id="admin-content">
        <div id="welcome-admin">
          <span>Welcome, </span>
          <span>Rika Furude</span>
        </div>
        <div id="admin-content-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
