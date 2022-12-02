import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUsersList } from "../../../../api/admin.service";
import Users from "../../../../components/forum/users/Users";
import "./displayuser.css";

function DisplayUser() {
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, selectedPage) => {
    setPage(selectedPage);
  };

  const {
    data: res,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["/admin", page], () => getUsersList(page), {
    keepPreviousData: true,
  });

  return (
    <div id="display-user" className="admin-content">
      <div className="display-block">
        <ul>
          {res?.data &&
            res.data.map((userInfo) => (
              <li>
                <Users userInfo={userInfo} refetchData={refetch} />
              </li>
            ))}
        </ul>

        {res && (
          <Pagination
            page={page}
            count={Math.ceil(res.total / res.per_page)}
            onChange={handleChangePagination}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayUser;
