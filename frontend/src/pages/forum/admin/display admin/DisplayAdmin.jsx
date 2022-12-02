import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAdminsList } from "../../../../api/admin.service";
import Admins from "../../../../components/forum/admins/Admins";
import "./displayadmin.css";

function DisplayAdmin() {
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, selectedPage) => {
    setPage(selectedPage);
  };

  // TODO connect demote admin api here
  const {
    data: res,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["/admin", page], () => getAdminsList(page), {
    keepPreviousData: true,
  });
  return (
    <div id="display-admin" className="admin-content">
      <div className="display-block">
        <ul>
          {res?.data &&
            res.data.map((adminInfo) => (
              <li>
                <Admins adminInfo={adminInfo} refetchData={refetch} />
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

export default DisplayAdmin;
