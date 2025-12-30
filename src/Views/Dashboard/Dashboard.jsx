import axios from "axios";
import React, { useEffect } from "react";
import Loading from "../../Components/Loading/Loading.jsx";
import UserList from "../../Components/UserList/UserList.jsx";
import { UserContext } from "../../data/UserProvider.jsx";

function Dashboard({ onReady, searchData }) {
  const [dataLoading, setDataLoading] = React.useState(true);
  const { data, setData } = React.useContext(UserContext);

  useEffect(() => {
    // Notify navbar that dashboard is ready and it can show search bar
    onReady(true);
    console.log("Dashboard search data", searchData);
    async function load() {
      setDataLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await axios.get("https://dummyjson.com/users?limit=50");

      // Set user data
      setData(res.data.users);

      // Data loading finished
      setDataLoading(false);
    }
    load();
  }, []);

  return (
    <div className="main-component font-poppins h-full p-4">
      {dataLoading ? <Loading /> : <UserList searchData={searchData} />}
    </div>
  );
}

export default Dashboard;
