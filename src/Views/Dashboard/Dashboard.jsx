import axios from "axios";
import React, { useEffect } from "react";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Loading from "../../Components/Loading/Loading.jsx";
import UserList from "../../Components/UserList/UserList.jsx";

function Dashboard({ onReady }) {
  const [data, setData] = React.useState([]);
  const [dataLoading, setDataLoading] = React.useState(true);

  useEffect(() => {
    // shows search bar and add user button in navbar
    onReady(true);
    async function load() {
      setDataLoading(true);
      // Simulate extra time to load data
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await axios.get("https://dummyjson.com/users?limit=50");
      setData(res);
      setDataLoading(false);

      console.log(res.data.users);
    }
    load();
  }, []);

  return (
    <div className="main-component font-poppins h-full p-4">
      <h3 className="text-secondary text-3xl font-medium">
        <AssignmentIndOutlinedIcon fontSize="6" />
        Users
      </h3>
      {dataLoading ? <Loading /> : <UserList users={data.data.users} />}
    </div>
  );
}

export default Dashboard;
