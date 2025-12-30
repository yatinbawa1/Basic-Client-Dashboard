import axios from "axios";
import React, { useEffect } from "react";
import Loading from "../../Components/Loading/Loading.jsx";
import UserList from "../../Components/UserList/UserList.jsx";
import { UserContext } from "../../data/UserProvider.jsx";

function Dashboard({ searchData }) {
  const [dataLoading, setDataLoading] = React.useState(true);
  // User Data
  const { data, setData } = React.useContext(UserContext);

  async function load() {
    setDataLoading(true);
    // This check is there
    // to not reload data on every navigation to dashboard
    // that becomes a problem when adding user because UserContext resets
    if (!data) {
      try {
        const res = await axios.get("https://dummyjson.com/users?limit=50");
        // Set user data
        setData(res.data.users);
      } catch (error) {
        navigate("/error", { replace: true });
        return;
      }
    }
    setDataLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="main-component font-poppins h-full p-4">
      {dataLoading ? <Loading /> : <UserList searchData={searchData} />}
    </div>
  );
}

export default Dashboard;
