import { Link } from "react-router-dom";
function New({ newData }) {
  return (
    <>
      <div className="topic">
        <time>{newData.updatedAt}</time>
        <img src={require("../../../images/rena-test.png")} alt="" />
        <Link to={`/news/${newData.id}`}>{newData.a_name}</Link>
      </div>
    </>
  );
}

export default New;
