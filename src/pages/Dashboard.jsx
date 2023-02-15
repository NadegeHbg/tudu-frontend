import { useEffect, useState } from "react";
import TodoItemForm from "../Components/forms/TodoItemForm";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
  const [tudu,setTudu] = useState([])
  useEffect( () => {
    async function fetchData() {
      const data = Cookies.get("id");
      setTudu(await GetTodos(data));
      console.log(tudu)
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-between">
      <Sidebar tudu={tudu} />
      <MiddleSection tudu={tudu}/>
      <TodoItemForm />
    </div>
  );
};

export default Dashboard;
