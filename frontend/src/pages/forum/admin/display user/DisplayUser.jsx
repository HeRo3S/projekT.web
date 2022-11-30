import "./displayuser.css";
import Users from "../../../../components/forum/users/Users";

function DisplayUser() {
  return (
    <div id="display-user" className="admin-content">
      <div className="display-block">
        <ul>
          <li>
            <Users />
          </li>
          <li>
            <Users />
          </li>
          <li>
            <Users />
          </li>
          <li>
            <Users />
          </li>
          <li>
            <Users />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayUser;
