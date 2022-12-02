import { useDispatch } from "react-redux";
import { updateUserToAdmin } from "../../../api/admin.service";
import { setMessage } from "../../../redux/features/messageSlice";
import { SEVERITY } from "../../../utils/enum";
import "./users.css";

function Users({ userInfo, refetchData }) {
  const dispatch = useDispatch();
  const handleClickPromote = async () => {
    try {
      const { data } = await updateUserToAdmin(userInfo?.id);
      if (data) {
        dispatch(
          setMessage({
            message: "Promote successfully!",
            severity: SEVERITY.SUCCESS,
          })
        );
        refetchData();
      }
    } catch (err) {}
  };

  return (
    <div className="users-container">
      <div className="users-info">
        <img src={require("../../../images/avatar-test.jpg")} alt="" />
        <div className="users-name">
          <span>{userInfo?.username}</span>
          <span>
            ID: <span>{userInfo?.id}</span>
          </span>
        </div>
      </div>
      <button onClick={handleClickPromote} className="normalBtn">
        Promote to Admin
      </button>
    </div>
  );
}

export default Users;
