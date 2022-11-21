import "./user.css";

function User() {
  return (
    <div id="user-page" className="main">
      <div id="user-page-content" className="content">
        <img
          src={require("../../../images/member-banner.png")}
          alt=""
          className="member-banner"
        />
        <div className="member-container">
          <img src={require("../../../images/avatar-test.jpg")} alt="" />
          <div className="member-description">
            <div>
              <span>Rena Ryuugu</span> #<span>1</span>
            </div>

            <span className="role">
              Role: <span>Member</span>
            </span>
          </div>
          <button className="normalBtn">Change Avatar</button>
        </div>
      </div>
    </div>
  );
}

export default User;
