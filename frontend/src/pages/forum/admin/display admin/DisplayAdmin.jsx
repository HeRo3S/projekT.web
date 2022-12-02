import { Pagination } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAdminsList } from "../../../../api/admin.service";
import Admins from "../../../../components/forum/admins/Admins";
import "./displayadmin.css";

function DisplayAdmin() {
  const [page, setPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePagination = (event, selectedPage) => {
    setPage(selectedPage);
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  const handleClickDemoteAdmin = () => {
    // TODO connect demote admin api here
  };

  const {
    data: res,
    isLoading,
    isFetching,
  } = useQuery(["/admins", page], () => getAdminsList(page), {
    keepPreviousData: true,
  });
  return (
    <div id="display-admin" className="admin-content">
      <div className="display-block">
        <ul>
          {res?.data &&
            res.data.map((adminInfo) => (
              <li>
                <Admins adminInfo={adminInfo} />
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
