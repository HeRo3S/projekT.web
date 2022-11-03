import React from "react";
import { Link } from "react-router-dom";
import New from "./news/New";

function News() {
  return (
    <>
      <div id="news">
        <h2>News</h2>
        <div id="news-content">
          <New />
          <New />
          <New />
        </div>
        <Link to="" className="normalBtn">
          More News
        </Link>
      </div>
    </>
  );
}

export default News;
