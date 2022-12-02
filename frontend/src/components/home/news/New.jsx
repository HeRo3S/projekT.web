import { Link } from "react-router-dom";
function New({ newData }) {
  return (
    <>
      <div className="topic">
        <time>{newData?.article?.updatedAt}</time>
        <img src={require("../../../images/rena-test.png")} alt="" />
        <Link to={`/news/${newData?.article?.id}`}>
          {newData?.article?.a_name}
        </Link>
      </div>
    </>
  );
}

export default New;
