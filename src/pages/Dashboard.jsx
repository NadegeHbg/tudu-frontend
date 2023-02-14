import { useEffect, useState } from "react";
import TodoItemForm from "../Components/forms/TodoItemForm";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [tudu,setTudu] = useState([])
  useEffect( () => {
    async function fetchData() {
      const data = Cookies.get("id");
      setTudu(await GetTodos(data));
    }
    fetchData()
  }, []);
 
  return <TodoItemForm />;
};

export default Dashboard;
