import { Link } from "react-router-dom";
function New() {
  return (
    <>
      <div className="topic">
        <time>19/06/1983</time>
        <img src={require("../../../images/rena.png")} alt="" />
        <Link to="">DLC Update</Link>
      </div>
    </>
  );
}

export default New;
