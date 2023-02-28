import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";
import MainFrame from "../Components/main/MainFrame";

const Dashboard = () => {
  // get all tudu from back end store it here. even filtered tudu is stored here
  const [tudu, setTudu] = useState([]);
  const [view, setView] = useState();
  const [cookie, setCookie] = useState();
  // eslint-disable-next-line
  useEffect(() => {
    async function fetchData() {
      const data = Cookies.get("id");
      setTudu(await GetTodos(data));
    }
    setView(Cookies.get("view"));
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar tudu={tudu} setTudu={setTudu} view={view} setView={setView} cookie={cookie} setCookie={setCookie}/>
      {view ? (
        <MiddleSection tudu={tudu} setTudu={setTudu} />
      ) : (
        <MainFrame tudu={tudu} setTudu={setTudu} />
      )}
    </div>
  );
};

export default Dashboard;
