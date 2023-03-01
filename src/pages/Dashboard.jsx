import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";
import MainFrame from "../Components/main/MainFrame";
import HeaderDashboard from "../Components/header/headerDashboard";

const Dashboard = () => {
  // get all tudu from back end store it here. even filtered tudu is stored here
  const [tudu, setTudu] = useState([]);
  const [view, setView] = useState(true);
  const [upcomingArray, setUpcomingArray] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    async function fetchData() {
      const data = Cookies.get("id");
      setTudu(await GetTodos(data));
      setUpcomingArray(await GetTodos(data));
     
    }
    fetchData();
  }, []);

  return (
    <div>
      <HeaderDashboard tudu={tudu} />
      <div className="flex">
        <Sidebar
          tudu={tudu}
          setTudu={setTudu}
          view={view}
          setView={setView}
          upcomingArray={upcomingArray}
        />
        {view ? (
          <MiddleSection tudu={tudu} setTudu={setTudu} />
        ) : (
          <MainFrame tudu={tudu} setTudu={setTudu} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
