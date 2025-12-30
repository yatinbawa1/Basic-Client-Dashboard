import React from "react";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Pagination from "../Pagination/Pagination";
import { UserContext } from "../../data/UserProvider";

function UserList({ users }) {
  const [currentArray, setCurrentArray] = React.useState([]);
  const { data } = React.useContext(UserContext);

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data.length > 0 ? (
        <div className="col-span-full flex flex-row">
          <h3 className="text-secondary flex items-center text-3xl font-medium">
            <AssignmentIndOutlinedIcon fontSize="" />
            <span className="">Users</span>
          </h3>

          <Pagination
            users={data}
            count={10}
            className="ml-auto"
            setCurrentArray={setCurrentArray}
          />
        </div>
      ) : (
        <div className="col-span-full flex flex-row items-center justify-center">
          <div className="">
            <img
              src="/No Data Icon.png"
              alt="No Data"
              className="mx-auto mt-8 h-48 w-48 opacity-50 md:h-72 md:w-72 lg:h-96 lg:w-96"
            />
            <p className="text-secondary mt-4 translate-x-[-10px] text-center font-bold md:translate-x-[-15px] md:text-3xl lg:translate-x-[-24px] lg:text-4xl">
              No Users Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
