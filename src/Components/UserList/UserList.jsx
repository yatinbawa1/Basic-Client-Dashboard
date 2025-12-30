import React from "react";
import { UserContext } from "../../data/UserProvider";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Pagination from "../Pagination/Pagination";
import UserItem from "./UserItem";
import EmptyState from "../EmptyState/EmptyState.jsx";

function UserList({ searchData }) {
  const [filteredData, setFilteredData] = React.useState([]);
  const [currentArray, setCurrentArray] = React.useState([]);
  const { data } = React.useContext(UserContext);

  React.useEffect(() => {
    if (!searchData || searchData.trim() === "") {
      setFilteredData(data);
      return;
    }

    setFilteredData(
      data.filter((user) => {
        const fullNameEmail =
          `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase();
        return fullNameEmail.includes(searchData.toLowerCase());
      }),
    );
  }, [searchData, data]);

  if (!filteredData || filteredData.length === 0)
    return (
      <EmptyState
        image="/No Data Icon.png"
        alt="No Data"
        message="No Users Available"
        messageClass="text-gray-500"
      />
    );

  return (
    <div className="mt-8 grid gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-accent flex items-center gap-2 text-3xl font-medium">
          <AssignmentIndOutlinedIcon />
          <span>Users</span>
        </h3>

        <Pagination
          users={filteredData}
          count={12}
          setCurrentArray={setCurrentArray}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {currentArray.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
