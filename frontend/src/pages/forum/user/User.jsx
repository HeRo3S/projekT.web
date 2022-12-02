import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../../api/user.service";
import { setMessage } from "../../../redux/features/messageSlice";
import { SEVERITY } from "../../../utils/enum";
import { memberRole } from "../../../utils/utils";
import "./user.css";

function User() {
  const { user_id } = useParams();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});

  const fetchUserInfo = async (userID) => {
    try {
      const { data } = await getUserInfo(userID);
      if (data) {
        setUserInfo(data);
      }
    } catch (err) {
      dispatch(
        setMessage({
          message: err || "Something occur!",
          severity: SEVERITY.ERROR,
        })
      );
    }
  };
  useEffect(() => {
    fetchUserInfo(user_id);
  }, []);

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
              <span>{userInfo?.username}</span> #<span>{userInfo?.id}</span>
            </div>

            <span className="role">
              Role:{" "}
              <span>{memberRole(userInfo?.userInfo?.permissionLevel)}</span>
            </span>
          </div>
          {/* <button className="normalBtn">Change Avatar</button> */}
        </div>
      </div>
    </div>
  );
}

export default User;
