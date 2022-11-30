import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailNew } from "../../../api/user.service";
import "./details_new.css";

function DetailsNew() {
  const { news_id } = useParams();
  const [newData, setNewData] = useState();

  const fetchDetailsNew = async () => {
    try {
      const { data } = await getDetailNew(news_id);
      if (data) setNewData(data);
    } catch (err) {}
  };

  useEffect(() => fetchDetailsNew, []);

  return (
    <>
      <div id="details-new" className="main">
        <div id="details-new-content" className="content">
          <div className="news-time">
            <span>{newData?.updatedAt}</span>
          </div>

          <div className="news-title">
            <h3>{newData?.a_name}</h3>
          </div>

          <div className="news-description">
            {parse(newData?.content || "")}
          </div>
        </div>
      </div>

      <div className="sky-bg"></div>
    </>
  );
}

export default DetailsNew;
