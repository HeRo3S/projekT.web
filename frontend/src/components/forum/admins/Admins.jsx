function Admins() {
  return (
    <div className="users-container">
      <div className="users-info">
        <img src={require("../../../images/avatar-test.jpg")} alt="" />
        <div className="users-name">
          <span>Rena Ryuugu</span>
          <span>
            ID: <span>1</span>
          </span>
        </div>
      </div>
      <button className="normalBtn">Demote to Member</button>
    </div>
  );
}

export default Admins;
