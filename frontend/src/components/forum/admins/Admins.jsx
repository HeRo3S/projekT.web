import { useDispatch } from "react-redux";
import { updateAdminToUser } from "../../../api/admin.service";
import { setMessage } from "../../../redux/features/messageSlice";
import { PERMISSION_LEVEL, SEVERITY } from "../../../utils/enum";

function Admins({ adminInfo, refetchData }) {
  const dispatch = useDispatch();
  const handleClickDemote = async () => {
    try {
      const { data } = await updateAdminToUser(adminInfo?.id);
      if (data) {
        dispatch(
          setMessage({
            message: "Demote successfully!",
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
          <span>{adminInfo?.username}</span>
          <span>
            ID: <span>{adminInfo?.id}</span>
          </span>
        </div>
      </div>
      <button
        disabled={
          adminInfo?.userInfo?.permissionLevel === PERMISSION_LEVEL.SUPER_ADMIN
        }
        onClick={handleClickDemote}
        className="normalBtn"
      >
        Demote to Member
      </button>
    </div>
  );
}

export default Admins;
