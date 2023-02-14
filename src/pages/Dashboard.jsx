import { useEffect } from "react";
import TodoItemForm from "../Components/forms/TodoItemForm";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";

const Dashboard = () => {
  useEffect( () => {
    async function fetchData() {
      const data = Cookies.get("id");
      await GetTodos(data);
    }
    fetchData()
  }, []);
  
  return <TodoItemForm />;
};

export default Dashboard;
