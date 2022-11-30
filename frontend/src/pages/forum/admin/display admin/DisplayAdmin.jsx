import "./displayadmin.css";
import Admins from "../../../../components/forum/admins/Admins";

function DisplayAdmin() {
  return (
    <div id="display-admin" className="admin-content">
      <div className="display-block">
        <ul>
          <li>
            <Admins />
          </li>
          <li>
            <Admins />
          </li>
          <li>
            <Admins />
          </li>
          <li>
            <Admins />
          </li>
          <li>
            <Admins />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayAdmin;
